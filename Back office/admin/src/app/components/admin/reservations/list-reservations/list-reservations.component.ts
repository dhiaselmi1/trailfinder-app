import {Component, OnInit} from '@angular/core';
import {TableService} from "../../../../_services/table.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {ReservationService} from "../../../../_services/reservation.service";
import {HttpErrorResponse} from "@angular/common/http";
import {UserService} from "../../../../_services/user.service";

@Component({
  selector: 'ps-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.scss']
})
export class ListReservationsComponent implements OnInit{
  data: any[] = [];
    imageToShow:any[] =[];
    p:number = 1;
    itemPerPage:number= 12;
  constructor(public service: TableService,
              private toastService: ToastrService,
              private reservationService: ReservationService,
              private router: Router,
              private userService:UserService
  ) {



  }

  ngOnInit(): void {
      this.loadData();

    }
  loadData() {
    this.reservationService.getAll().subscribe(
        (response: any) => {
          this.data = response;
          console.log(this.data);
            this.data.forEach((item) => {
                const promise = this.loadImage(item.user.photo);
                this.imageToShow.push(promise);
            }
            );
            console.log(this.imageToShow);
        },
        () => {
        },
        () => {
        }
    );
  }
    loadImage(filename: String): Promise<String> {
        return new Promise((resolve, reject) => {
            this.userService.getImage(filename).subscribe(
                (response: Blob) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const imageDataUrl = reader.result as String;
                        resolve(imageDataUrl); // Résoudre la promesse avec l'URL de données de l'image
                    };

                    if (response) {
                        reader.readAsDataURL(response);
                    }
                },
                (err: HttpErrorResponse) => {
                    console.log(err);
                    reject(err);
                }
            );
        });
    }
}
