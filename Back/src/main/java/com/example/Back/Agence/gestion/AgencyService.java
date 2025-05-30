package com.example.Back.Agence.gestion;

import com.example.Back.Admin.AdminRequest;
import com.example.Back.Admin.AdminService;
import com.example.Back.Agence.Agency;
import com.example.Back.Agence.AgencyRepo;

import com.example.Back.Agence.Token.Token;
import com.example.Back.Agence.Token.TokenRepo;
import com.example.Back.Event.Event;
import com.example.Back.Event.EventRepo;
import com.example.Back.Role.Role;
import com.example.Back.Role.RoleRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AgencyService {
    private final AgencyRepo agencyRepo;
    private final AdminService adminService;
    private final RoleRepo roleRepo;
    private final EventRepo eventRepo;
private final TokenRepo tokenRepo;
    private final PasswordEncoder passwordEncoder;
    private static final String UPLOAD_DIR = "C:/Users/moham/OneDrive/Bureau/Spring Boot/Back/Back/src/main/resources/images/agence";


    public  void Delete(Integer id) {
        List<Token>  tokens = tokenRepo.findByAgency_Id(id);
        for(Token t : tokens)
        {
            tokenRepo.deleteById(t.getId());
        }
      Agency agency = agencyRepo.findById(id).get();
       agencyRepo.deleteById(agency.getId());
       return ;
    }
  public Agency Add(AddRequest request)
    {
        Role r = roleRepo.findById(2).get();
if(agencyRepo.findByAgency(request.getAgency()).isPresent())
    throw new IllegalStateException("Une agence avec ce nom existe deja");

        if(request.getAgency().isEmpty())
        throw new IllegalStateException("Le nom de l'agence est obligatoire");
        if(request.getRepresentative().isEmpty())
            throw new IllegalStateException("Le champs representative est obligatoire");
        if(request.getPhone_number().isEmpty())
            throw new IllegalStateException("Le champs numéro de téléphone est obligatoire");

        if(request.getEmail().isEmpty())
            throw new IllegalStateException("Le champs email est obligatoire");
        if(request.getCountry().isEmpty())
            throw new IllegalStateException("Le champs pays est obligatoire");
        if(request.getPassword().isEmpty())
            throw new IllegalStateException("Le champs mot de passe  est obligatoire");
        if(request.getActivity().isEmpty())
            throw new IllegalStateException("Il faut selectionner une activité");
        request.setPassword(encode(request.getPassword()));
        Agency agency =  Agency.builder()
                .representative(request.getRepresentative())
                .agency(request.getAgency())
                .email(request.getEmail())
                .phone_number(request.getPhone_number())
                .password(request.getPassword())
                .activity(request.getActivity())
                .country(request.getCountry())
                .description(request.getDescription())
                .logo(uploadImageToFileSystem(request.getFile()))
                .role(r)
                .build();

            Optional<Agency> a = agencyRepo.findByAgency(agency.getAgency());
            if (a.isPresent())
                throw new IllegalStateException("Une agence avec le même nom existe déjà.");

          agency.setApproved(true);
           agency.setEnabled(true);

        agencyRepo.save(agency);
                return agency;


    }
    public String uploadImageToFileSystem(MultipartFile file) {
        String filePath=UPLOAD_DIR+ "/"+file.getOriginalFilename();


        try {
            file.transferTo(new File(filePath));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


        return file.getOriginalFilename();
    }
    public void updateImageToFileSystem(MultipartFile file,Integer id)
    {
     Agency a =  agencyRepo.findById(id).get();
a.setLogo(uploadImageToFileSystem(file));
agencyRepo.save(a);

    }
    public byte[] downloadImageFromFileSystem(String fileName) {

        String filePath=UPLOAD_DIR+ "/"+fileName;
        byte[] images = new byte[0];
        try {
            images = Files.readAllBytes(new File(filePath).toPath());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return images;
    }
    public Agency update(AddRequest request)
    {
        Optional<Agency> a = agencyRepo.findById(request.getId());
        if(a.isPresent()) {
           a.get().setRepresentative(request.getRepresentative());
           a.get().setAgency(request.getAgency());
            a.get().setPhone_number(request.getPhone_number());
            a.get().setActivity(request.getActivity());
            a.get().setEmail(request.getEmail());
            a.get().setCountry(request.getCountry());
            a.get().setDescription(request.getDescription());
agencyRepo.save(a.get());
return a.get();
        }
        throw new IllegalStateException("pas d'agence avec cet id");

    }


    public String encode(String a)
    {
    return  passwordEncoder.encode(a);

    }
    public List<AgencyWithEvent> GetAll() {
        List<AgencyWithEvent> result = new ArrayList<>();
        Date date = new Date();
        LocalDate localDate = date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        List<Agency> agencies = agencyRepo.findAll();

        for (Agency agency : agencies) {
            Event event = eventRepo.findTopByAgencyAndDateAfterOrderByDateAsc(agency, localDate);
            if (event == null) {
                event = eventRepo.findTopByAgencyAndDateBeforeOrderByDateDesc(agency, localDate);
            }

            AgencyWithEvent agencyWithEvent = new AgencyWithEvent();
            agencyWithEvent.setAgency(agency);
            if (event != null) {
                agencyWithEvent.setPoster(event.getPoster());
            }
            result.add(agencyWithEvent);
        }

        for (AgencyWithEvent res : result) {
            res.getAgency().getEvents().sort((a1, a2) -> {
                LocalDate date1 = a1.getDate() != null ? a1.getDate() : LocalDate.MIN;
                LocalDate date2 = a2.getDate() != null ? a2.getDate() : LocalDate.MIN;
                return date2.compareTo(date1);
            });
        }
        return result;
    }
    public Agency getAgency(Integer id )
    {
        Optional<Agency> a = agencyRepo.findById(id);
        if(a.isPresent())
            return  a.get();
        throw new IllegalStateException("agence introuvable");
    }



    public String AddAdmin(AdminRequest a)
    {
        adminService.saveAdmin(a);
        return "admin added successfully";
    }


}

