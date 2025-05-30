package com.example.Back.Image;

import com.example.Back.partner.AddRequest;
import com.example.Back.partner.Partner;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/gestion")
public class ImageController {
    private final ImageService imageService;
    @PostMapping(path="image")
    public Image addPartner(@RequestParam("partner_id") String partner_id,
                              @RequestParam("logo") MultipartFile logo)
    {
ImageRequest imageRequest = ImageRequest.builder()
        .logo(logo)
        .partner_id(Integer.valueOf(partner_id))
        .build();
   return imageService.uploadImageToFileSystem(imageRequest);
    }@PostMapping(path="image1")
    public Image addEvent(@RequestParam("event_id") String event_id,
                              @RequestParam("logo") MultipartFile logo)
    {
ImageEventRequest imageRequest = ImageEventRequest.builder()
        .logo(logo)
        .event_id(Integer.valueOf(event_id))
        .build();
   return imageService.uploadImageToFileSystem1(imageRequest);
    }
}
