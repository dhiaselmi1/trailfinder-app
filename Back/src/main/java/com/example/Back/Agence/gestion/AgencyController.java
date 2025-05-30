package com.example.Back.Agence.gestion;

import com.example.Back.Admin.AdminRequest;
import com.example.Back.Agence.Agency;
import com.example.Back.Auth.AuthenticationService;
import io.jsonwebtoken.io.IOException;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/gestion")
public class AgencyController {

    private final AgencyService gestionService;
    private final AuthenticationService authenticationService;
    @DeleteMapping(path = "agence/{id}")
    public   void deleteAgency(@PathVariable  Integer id)  {
  gestionService.Delete(id);

    }
    @GetMapping(path = "agence/{id}")
    public Agency getAgency(@PathVariable  Integer id)  {
        return gestionService.getAgency(id);
    }
    @PostMapping(path="add")
    public String AddAgency(@RequestBody AdminRequest a)
    {
        return gestionService.AddAdmin(a);
    }

    @PostMapping(path="agence" )
    public Agency addAgency( @RequestParam("agency") String agency,
                             @RequestParam("representative") String representative,
                            @RequestParam("email") String email,
                            @RequestParam("phone_number") String phoneNumber,
                            @RequestParam("password") String password,
                            @RequestParam("activity") String activity,
                            @RequestParam("country") String country,
                            @RequestParam("description") String description,
                            @RequestParam("image") MultipartFile file)
    {
        AddRequest request = AddRequest.builder()
                .representative(representative)
                .agency(agency)
                .email(email)
                .phone_number(phoneNumber)
                .password(password)
                .activity(activity)
                .country(country)
                .description(description)
                .file(file)
                .build();
        return   gestionService.Add(request);
    }
    @GetMapping("/agence/image/{fileName}")
    public ResponseEntity<?> downloadImageFromFileSystem(@PathVariable String fileName) throws IOException {
        byte[] imageData=gestionService.downloadImageFromFileSystem(fileName);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }

    @PutMapping(path = "agence")
    public Agency updateAgency(@RequestBody AddRequest request)
    {


      return  gestionService.update(request);
    }
    @PutMapping(path = "agence/image")
    public void updateLogo( @RequestParam("image") MultipartFile file,@RequestParam("id") String id)
    {
gestionService.updateImageToFileSystem(file,Integer.parseInt(id));
    }
    @PutMapping(path = "approuve/{id}")
    public void approveAgency(@PathVariable Integer id) throws MessagingException {

          authenticationService.approve(id);
    }

    @GetMapping("agence")
    public List<AgencyWithEvent> GetAllAgencies()
    {
        return  gestionService.GetAll();
    }

}
