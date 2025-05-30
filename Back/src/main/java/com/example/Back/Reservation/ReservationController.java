package com.example.Back.Reservation;

import com.example.Back.User.User;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/gestion")
public class ReservationController {
private final ReservationService reservationService;
    @PostMapping(path ="reservation" )
    public byte[] addReservation(@RequestBody List<ReservationRequest> reservationRequest)
    {
      return reservationService.add(reservationRequest);

    }

    @GetMapping(path ="reservation" )
    public List<ReservationResponse> GetAllReservations()
    {
        return  reservationService.getAll();
    }
    @GetMapping(path ="reservation/{id}" )
    public List<Reservation> GetReservationsByEvent(@PathVariable  Integer id)
    {
        return  reservationService.getByEvent(id);
    }
   @GetMapping(path ="reservationUser/{id}" )
    public List<Reservation> GetReservationsByUser(@PathVariable  Integer id)
    {
        return  reservationService.getByUser(id);
    }@PutMapping(path ="reservation" )
    public Boolean GetReservationsByUser(@RequestBody  String code)
    {
        return  reservationService.scan(code);
    }
@PostMapping(path="reservation/user")
   public User GetUser(@RequestBody  String code)
{
    return reservationService.GetUser(code);
}

}
