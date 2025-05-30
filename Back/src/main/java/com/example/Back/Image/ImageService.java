package com.example.Back.Image;

import com.example.Back.Event.Event;
import com.example.Back.Event.EventRepo;
import com.example.Back.partner.Partner;
import com.example.Back.partner.PartnerRepo;
import com.example.Back.partner.PartnerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

@Service
@RequiredArgsConstructor
public class ImageService {
    private final ImageRepo imageRepo;
    private final PartnerRepo partnerRepo;
    private final EventRepo eventRepo;
    private static final String UPLOAD_DIR = "C:/Users/moham/OneDrive/Bureau/Spring Boot/Back/Back/src/main/resources/images/partner";
    private static final String UPLOAD_DIR1 = "C:/Users/moham/OneDrive/Bureau/Spring Boot/Back/Back/src/main/resources/images/event";
    public Image uploadImageToFileSystem(ImageRequest i) {

        String filePath = UPLOAD_DIR + "/" + i.getLogo().getOriginalFilename();

        try {
            i.getLogo().transferTo(new File(filePath));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
Partner p =partnerRepo.findById(i.getPartner_id()).get();

        Image image = Image.builder()
                .image(i.getLogo().getOriginalFilename())
                .partner(p)
                .build();
        imageRepo.save(image);
        return image;
    }
    public Image uploadImageToFileSystem1(ImageEventRequest i) {

        String filePath = UPLOAD_DIR1 + "/" + i.getLogo().getOriginalFilename();

        try {
            i.getLogo().transferTo(new File(filePath));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
Event e =eventRepo.findById(i.getEvent_id()).get();

        Image image = Image.builder()
                .image(i.getLogo().getOriginalFilename())
                .event(e)
                .build();
        imageRepo.save(image);
        return image;
    }

}
