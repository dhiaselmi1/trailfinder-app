import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../../../../_services/event.service";
import {ReservationModel} from "../../../../_models/reservation.model";
import {ReservationService} from "../../../../_services/reservation.service";
import {HttpErrorResponse} from "@angular/common/http";
import {UserService} from "../../../../_services/user.service";
import {UserModel} from "../../../../_models/user.model";
import { saveAs } from 'file-saver';

@Component({
    selector: 'ps-add-reservations',
    templateUrl: './add-reservations.component.html',
    styleUrls: ['./add-reservations.component.scss']
})
export class AddReservationsComponent implements OnInit {
    data: any[] = [];
    reservations:ReservationModel[]=[];
    reservation:ReservationModel;
    first_name:String;
    last_name:String;
    users: UserModel[] = [];
    user:UserModel;
    quantity:number=1;
    i=1;
    constructor(private toastr:ToastrService,
                private eventService: EventService,
                private router: Router,
                private reservationService:ReservationService,
                private userService:UserService
    ) {
    }

    ngOnInit(): void {
        this.loadData();
        this.user = {
            password: "",
            first_name: "",
            country: "",
            email: "",
            id: 0,
            image:null,
            photo:"",
            imageToShow:null,
            phone_number: "",
            last_name: "",
            passwordConfirmation: "",
            role_id:0,
            isDropdownOpen:false,
        };
        this.reservation = {
            event_id:0,
            user_id:0,
            tickets_number:1
        };
        this.reservations=[];
    }
    loadData() {
        this.eventService.getAll().subscribe(
            (response: any) => {
                this.data = response;

            },
            (err: HttpErrorResponse) => {
                console.log(err);

            },
            () => {
            }
        );
    }


    saveReservation()
    {this.findUser();

        this.userService.getAll().subscribe(
            (response: any) => {
                this.users = response;

                if(this.reservation.event_id==0) {
                    this.toastr.error("Il faut séléctionner un événement");
                    return;
                }if(this.reservation.user_id==0) {
                    this.toastr.error("Il faut Remplir le champs nom et prénom");
                    return;
                }


this.reservations.push(this.reservation);

                this.reservationService.save(this.reservations).subscribe((data:Blob) => {
                        this.reservation = {
                            event_id: 0,
                            user_id: 0,
                            tickets_number: 0
                        };
                        saveAs(data, 'ticket.pdf');

                        this.toastr.success('Votre réservation a été ajoutée avec succès');
                        this.router.navigate(["/reservations/list"]);
                    },
                    (err: HttpErrorResponse) => {
                        console.log(this.reservation);
                        console.log(err);
                        this.toastr.error('Échec');
                    });
            },
            (err: HttpErrorResponse) => {
                console.log(err);
            }
        );
    }

    resetReservation() {
        this.reservation = {
            event_id:0,
            user_id:0,
            tickets_number:0
        };
    }
    findUser()
    {
        this.userService.getAll().subscribe(
            (response: any) => {
                this.users = response;
                console.log(this.users);
                this.user = this.users.find(user => user.first_name === this.first_name && user.last_name === this.last_name);
                console.log(this.user)
                this.reservation.user_id = this.user.id;
            },
            (err: HttpErrorResponse) => {
                this.toastr.error('Erreur dans la récupération de l utilisateur');
                console.log(err);

            },
            () => {
            }
        );
    }

    plus(){
        this.i++;
        this.reservation.tickets_number=this.i;
        console.log(this.quantity);
    }

    minus(){
        if(this.i !=1){
            this.i--;
            this.reservation.tickets_number=this.i;


        }
    }
}