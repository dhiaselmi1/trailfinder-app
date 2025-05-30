package com.example.Back.partner;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class PartnerService {
    private final  PartnerRepo partnerRepo;
    private static final String UPLOAD_DIR = "C:/Users/moham/OneDrive/Bureau/Spring Boot/Back/Back/src/main/resources/images/partner";
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
    public String uploadImageToFileSystem(MultipartFile file) {
        String filePath = UPLOAD_DIR + "/" + file.getOriginalFilename();

        try {
            file.transferTo(new File(filePath));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


        return file.getOriginalFilename();
    }
    public List<Partner> getAll()
{
    return partnerRepo.findAll();
}
public Partner getById(Integer id)
{
    Optional<Partner> p = partnerRepo.findById(id);
    if(p.isPresent())
    {
        return  p.get();
    }
    throw new IllegalStateException("pas de partenaire  avec cet id");
}
    public void delete(Integer id)
    {
        partnerRepo.deleteById(id);
    }
    public Partner update(Partner p)
    {
        Partner partner = partnerRepo.findById(p.getId()).get();
partner.setDescription(p.getDescription());
partner.setName(p.getName());
partner.setCategory(p.getCategory());
partner.setEmail(p.getEmail());
partner.setPhone_number(p.getPhone_number());
        partnerRepo.save(partner);
        return partner;
    }
    public  Partner add(AddRequest p)
    {
        if(partnerRepo.findByName(p.getName()).isPresent())
        {
            throw new IllegalStateException("un partenaire avec le meme nom existe");
        }
        Partner partner = Partner.builder()
                .name(p.getName())
                .description(p.getDescription())
                .category(p.getCategory())
                .phone_number(p.getPhone_number())
                .email(p.getEmail())
                .logo(uploadImageToFileSystem(p.getLogo()))
                .build();
                partnerRepo.save(partner);
                return partner;
    }
    public void updateImageToFileSystem(MultipartFile file,Integer id)
    {
        Partner p =  partnerRepo.findById(id).get();
        p.setLogo(uploadImageToFileSystem(file));
        partnerRepo.save(p);
    }
}
