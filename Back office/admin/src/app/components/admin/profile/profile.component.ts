import {Component, OnInit} from '@angular/core';
import {TableService} from "../../../_services/table.service";
import {ToastrService} from "ngx-toastr";
import {AgencesService} from "../../../_services/agences.service";
import {EventService} from "../../../_services/event.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {ImageModel} from "../../../_models/image.model";
import {Image1Model} from "../../../_models/image1.model";
import {ImageService} from "../../../_services/image.service";
import {EventModel} from "../../../_models/event.model";
import {LocalDateTime} from "@js-joda/core";

@Component({
  selector: 'ps-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
    showUpdate: boolean = false;
  data: any[] = [];
    file:File;
    file1:File;
    event: any;
    agency:any;
    showChangeLogo: boolean = false;
    showChangeLogo1: boolean = false;
    images:Image1Model;

    constructor(public service: TableService,
              private toastService: ToastrService,
              private agenceService: AgencesService,
              private eventService: EventService,
                private imageService:ImageService,
  ) {
    this.loadData();
  }

  ngOnInit() {
      this.images = {
          logo: null,
          event_id: 0
      }
  }
  loadData() {
    this.agenceService.getAll().subscribe(
        (response: any) => {
          this.data = response;
          this.data.forEach((item: any) => {

                item.imageToShow = this.loadImage(item.agency.logo);

                item.event = this.loadPoster(item.poster);


              }


          );

          this.data = this.data.filter(item =>(item.agency.agency===localStorage.getItem("login")));
            this.data[0].agency.events.forEach((item: any) => {

                   item.images.forEach((image:any)=> {
                       image.show=this.loadPoster(image.image);

                   })


                }


            );

                  this.data[0].agency.events.forEach((item: any) => {

                item.imageToShow =this.loadPoster(item.poster);
                      item.date=item.date.split('-').reverse().join('-');



              });
                this.agency =    this.data[0].agency
            console.log(this.agency);
        },
        () => {
        },
        () => {
        }
    );
  }
  loadImage(filename: String): Promise<String> {
    return new Promise((resolve, reject) => {
      this.agenceService.getImage(filename).subscribe(
          (response: Blob) => {
            const reader = new FileReader();
            reader.onload = () => {
              const imageDataUrl = reader.result as String;
              resolve(imageDataUrl);
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
  loadPoster(filename: String): Promise<String> {
    return new Promise((resolve, reject) => {
      this.eventService.getImage(filename).subscribe(
          (response: Blob) => {
            const reader = new FileReader();
            reader.onload = () => {
              const imageDataUrl = reader.result as String;
              resolve(imageDataUrl);
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
    getFile(event:any){
        this.file= event.target.files[0];
    }  getFile1(event:any){
        this.file1= event.target.files[0];
    }
    openChangeLogo(event:any) {
        this.showChangeLogo = true;
        this.event = event;

    }
    openChangeLogo1() {
        this.showChangeLogo1 = true;
    }
    closeChangeLogo() {
        this.showChangeLogo = false;
        this.file = undefined
    } closeChangeLogo1() {
        this.showChangeLogo1 = false;
        this.file1 = undefined
    }
    changeLogo() {
        this.images.logo=this.file;
        this.images.event_id=this.event.id;
        this.imageService.save1(this.images).subscribe(() => {
                this.closeChangeLogo();
                window.location.reload();

            },
            (err: HttpErrorResponse) => {
                console.log(err);

            },
            () => {
            }
        );
    }
    changeLogo1() {
        this.agenceService.updateImage(this.file1, this.agency.id).subscribe({
            next: (res) => {
                this.closeChangeLogo();
                this.toastService.success(
                    "Le  logo a été modifié avec succés",
                    "Modification logo",
                );
                window.location.reload();

            },
            error: (err: HttpErrorResponse) => {
                console.log(err);
                this.toastService.error("Échec de changement du logo");
            }
        });
    }
    openUpdate() {
        this.showUpdate = true;
    }
    closeUpdate() {
        this.showUpdate = false;
    }
    updateAgence(){


        this.agenceService.update(this.agency).subscribe((response : any)=>{

                    this.agency = {
                        description: "",
                        password: "",
                        activity: "",
                        agency: "",
                        country: "",
                        email: "",
                        id: 0,
                        image:null,
                        phone_number: "",
                        representative: "",
                        passwordConfirmation: "",
                        approved:false,
                    };
                this.closeUpdate()
                    this.toastService.success("L'agence a été modifiée avec succés","Succés",)


                },
                (err: HttpErrorResponse) => {
                    console.log(err);
                    this.toastService.error("Échec de modification");
                },
                () => {

                })


    }



}
