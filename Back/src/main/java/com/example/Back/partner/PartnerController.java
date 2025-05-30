package com.example.Back.partner;

import io.jsonwebtoken.io.IOException;
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
public class PartnerController {
    private final PartnerService partnerService;
    @PostMapping(path="partner")
    public Partner addPartner(@RequestParam("name") String name,
                           @RequestParam("logo") MultipartFile logo,
                           @RequestParam("category") String category,
                           @RequestParam("description") String description,
                              @RequestParam("email") String email,
                                          @RequestParam("phone_number") String phone_number)
    {
        AddRequest p = AddRequest.builder()
                .name(name)
                .category(category)
                .description(description)
                .logo(logo)
                .email(email)
                .phone_number(phone_number)
                .build();
      return   partnerService.add(p);
    }
    @DeleteMapping(path = "partner/{id}")
    public  void deletePartner(@PathVariable  Integer id)  {
        partnerService.delete(id);
    }
    @PutMapping(path = "partner")
    public Partner updatePartner(@RequestBody Partner p)
    {
        return  partnerService.update(p);
    }
    @GetMapping("partner")
    public List<Partner> GetAllPartners()
    {
        return  partnerService.getAll();
    }
    @GetMapping(path = "partner/{id}")
    public  Partner getPartner(@PathVariable  Integer id)  {

        return partnerService.getById(id);
    }
    @GetMapping("/partner/image/{fileName}")
    public ResponseEntity<?> downloadImageFromFileSystem(@PathVariable String fileName) throws IOException {
        byte[] imageData= partnerService.downloadImageFromFileSystem(fileName);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }
    @PutMapping(path = "partner/image")
    public void updateLogo( @RequestParam("image") MultipartFile file,@RequestParam("id") String id)
    {
        partnerService.updateImageToFileSystem(file,Integer.parseInt(id));
    }
}
