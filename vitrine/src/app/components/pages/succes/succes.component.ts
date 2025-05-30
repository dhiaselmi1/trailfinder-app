import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ReservationModel} from "../../../_models/reservation.model";
import { saveAs } from 'file-saver';
import {ReservationService} from "../../../_services/reservation.service";

@Component({
  selector: 'app-succes',
  templateUrl: './succes.component.html',
  styleUrls: ['./succes.component.scss']
})
export class SuccesComponent implements OnInit{
    reservations:ReservationModel[]=[];
    reservation:ReservationModel;
constructor(private reservationService:ReservationService) {
}

    ngOnInit(): void {

        this.reservations=JSON.parse(localStorage.getItem("reservation"));

        console.log(this.reservations);
        if(this.reservations)
       this.Ticket();
    }
    Ticket()
    {


        this.reservationService.save(this.reservations).subscribe((data:Blob) => {

                  saveAs(data, 'ticket.pdf');
localStorage.removeItem("reservation");

            },
            (err: HttpErrorResponse) => {
                console.log(this.reservation);
                console.log(err);
            });
    }
}
