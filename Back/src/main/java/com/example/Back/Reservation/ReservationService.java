package com.example.Back.Reservation;

import com.example.Back.Event.Event;
import com.example.Back.Event.EventRepo;
import com.example.Back.User.User;
import com.example.Back.User.UserRepo;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.AreaBreak;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.properties.AreaBreakType;
import com.itextpdf.layout.properties.HorizontalAlignment;
import com.itextpdf.layout.properties.TextAlignment;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.security.SecureRandom;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class ReservationService {
    private final ReservationRepo reservationRepo;
    private final EventRepo eventRepo;
    private final UserRepo userRepo;
    public byte[] add(List<ReservationRequest> reservationRequests) {
        List<String> codes = new ArrayList<>();
        Optional<User> u = userRepo.findById(reservationRequests.get(0).getUser_id().intValue());
        if(u.isEmpty())
            throw new IllegalStateException("pas d'utilisateur avec cette id");
        LocalTime tempsReservation = LocalTime.now();
        LocalDate dateReservation = LocalDate.now();

        for (ReservationRequest reservationRequest : reservationRequests) {
            Optional<Event> e = eventRepo.findById(reservationRequest.getEvent_id());
            if(e.isEmpty())
                throw new IllegalStateException("pas d'event avec cette id");

            for (int i = 0; i < reservationRequest.getTickets_number(); i++) {
                String c = generateActivationCode(6);
                codes.add(c);
                Reservation res = Reservation.builder()
                        .event(e.get())
                        .user(u.get())
                        .reservation_time(tempsReservation)
                        .reservation_date(dateReservation)
                        .code(c)
                        .build();
                reservationRepo.save(res);
            }
        }

        byte[] pdfBytes = null;
        try {
            pdfBytes = createPdf(codes, reservationRequests, tempsReservation, dateReservation,
                    u.get().getFirst_name() + " " + u.get().getLast_name());
        } catch (IOException e1) {
            // Gérer l'exception
        } catch (WriterException ex) {
            throw new RuntimeException(ex);
        }

        return pdfBytes;
    }


    public List<ReservationResponse> getAll()
    { List< ReservationResponse > r = new ArrayList<>();
        List< Reservation > reservations   = reservationRepo.findAll();
        for (Reservation reservation : reservations) {
            ReservationResponse newReservation = new ReservationResponse();
           newReservation.setUser(reservation.getUser());
            newReservation.setEvent(reservation.getEvent());
            newReservation.setReservation_date(reservation.getReservation_date());
            newReservation.setReservation_time(reservation.getReservation_time());
            newReservation.setCode(reservation.getCode());
newReservation.setTicketScanned(reservation.isTicketScanned());

            r.add(newReservation);
        }
        return r;
    }
    public List<Reservation>  getByEvent(Integer id)
    {
        Event e = eventRepo.findById(id).get();
       return reservationRepo.findByEvent(e);
    }
    public List<Reservation>  getByUser(Integer id)
    {
        User u = userRepo.findById(id).get();
        return reservationRepo.findByUser(u);
    }
    public String generateActivationCode(int length) {
        String code;
        Optional<Reservation> r;

        do {
            String characters = "0123456789";
            StringBuilder codeBuilder = new StringBuilder();
            SecureRandom secureRandom = new SecureRandom();

            for (int i = 0; i < length; i++) {
                int randomIndex = secureRandom.nextInt(characters.length());
                codeBuilder.append(characters.charAt(randomIndex));
            }

            code = codeBuilder.toString();
            r = reservationRepo.findByCode(code);
        } while (r.isPresent());

        return code;
    }
    public BufferedImage generateQRCodeImage(String barcodeText) throws WriterException {
        QRCodeWriter qrCodeWriter = new QRCodeWriter();
        Hashtable<EncodeHintType, ErrorCorrectionLevel> hintMap = new Hashtable<>();
        hintMap.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.L);
        BitMatrix bitMatrix = qrCodeWriter.encode(barcodeText, BarcodeFormat.QR_CODE, 300, 300, hintMap);
        BufferedImage image = new BufferedImage(300, 300, BufferedImage.TYPE_INT_RGB);
        for (int i = 0; i < 300; i++) {
            for (int j = 0; j < 300; j++) {
                int pixelValue = bitMatrix.get(i, j) ? 0 : 1;
                image.setRGB(i, j, (pixelValue == 0 ? 0 : 0xFFFFFF));
            }
        }
        return image;
    }

    public byte[] createPdf(List<String> qrCodes, List<ReservationRequest> reservationRequests, LocalTime reservationTime, LocalDate reservationDate, String user) throws IOException, WriterException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PdfWriter writer = new PdfWriter(baos);
        PdfDocument pdfDoc = new PdfDocument(writer);
        Document document = new Document(pdfDoc);

        int codeIndex = 0;

        for (ReservationRequest reservationRequest : reservationRequests) {
            Optional<Event> e = eventRepo.findById(reservationRequest.getEvent_id());
            if(e.isEmpty())
                throw new IllegalStateException("pas d'event avec cette id");

            String eventName = e.get().getName();
            String agencyName = e.get().getAgency().getAgency();
            int ticketsNumber = reservationRequest.getTickets_number();

            for (int i = 0; i < ticketsNumber; i++) {
                Paragraph title = new Paragraph("Ticket de SUMMITSELLS")
                        .setTextAlignment(TextAlignment.CENTER)
                        .setFontSize(24);
                document.add(title);
                BufferedImage qrCodeImage = generateQRCodeImage(qrCodes.get(codeIndex));
                ByteArrayOutputStream qrCodeBaos = new ByteArrayOutputStream();
                ImageIO.write(qrCodeImage, "png", qrCodeBaos);
                Image qrCodePdfImage = new Image(ImageDataFactory.create(qrCodeBaos.toByteArray()));
                qrCodePdfImage.setHorizontalAlignment(HorizontalAlignment.CENTER);
                document.add(qrCodePdfImage);

                float fontSize = 16; // Définissez la taille de la police que vous voulez
                float marginBottom = 12; // Définissez l'espace que vous voulez après chaque paragraphe

                document.add(new Paragraph("Client " + user).setFontSize(fontSize).setMarginBottom(marginBottom));
                document.add(new Paragraph("Nom de l'événement : " + eventName).setFontSize(fontSize).setMarginBottom(marginBottom));
                document.add(new Paragraph("Nom de l'agence : " + agencyName).setFontSize(fontSize).setMarginBottom(marginBottom));
                document.add(new Paragraph("Temps de réservation : " + reservationTime).setFontSize(fontSize).setMarginBottom(marginBottom));
                document.add(new Paragraph("Date de réservation : " + reservationDate).setFontSize(fontSize).setMarginBottom(marginBottom));

                if (codeIndex < qrCodes.size() - 1) {
                    document.add(new AreaBreak(AreaBreakType.NEXT_PAGE));
                }
                codeIndex++;
            }
        }
        document.close();

        return baos.toByteArray();
    }
public Boolean scan(String code)
{
    Optional<Reservation> r =reservationRepo.findByCode(code);
    if(r.isPresent())
    {   r.get().setTicketScanned(true);
    reservationRepo.save(r.get());
        return true;}
    else
        return false;

}
public User GetUser(String code)
    {
        Optional<Reservation> r =reservationRepo.findByCode(code);
if(r.isPresent())
    return r.get().getUser();
else
    throw new IllegalStateException("La reservation avec ce code n'existe pas ");
    }
}
