import {Component, OnInit} from '@angular/core';
import {AgencesService} from "../../../../_services/agences.service";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ps-add-edit-agence',
  templateUrl: './add-edit-agence.component.html',
  styleUrls: ['./add-edit-agence.component.scss']
})
export class AddEditAgenceComponent implements OnInit{
    activity: string[] = [];
agency:any;
    isCreateAgency = true;

  constructor(private agenceService:AgencesService,private toastr:ToastrService,
              private activatedRoute:ActivatedRoute,    private router: Router
  ) {
  }

    ngOnInit(): void {
      this.agency = this.activatedRoute.snapshot.data['Agency'];

        if (this.agency && this.agency.id > 0) {
            this.isCreateAgency = false;
            this.agency.password = '';
            if (this.agency.activity != '') {
                this.activity = [];
                this.activity = this.agency.activity.split(',');
            }
        } else {
            this.isCreateAgency = true;
        }
    }

  file:File;
  getFile(event:any){
this.file= event.target.files[0];
      this.agency.image = this.file;
  }
    checkActivity(activity: string) {
        return this.agency.activity != null && this.agency.activity.includes(activity);
    }






  saveAgence(){

      if(this.isCreateAgency)
      {
      if(this.agency.agency=="") {
          this.toastr.error("le nom d'agence est obligatoire");
          return;
      }
      if(this.agency.representative=="") {
          this.toastr.error("le nom de responsable est obligatoire");
          return;
      }
      if(this.agency.phone_number=="") {
          this.toastr.error("le numéro de téléphone est obligatoire");
          return;
      }
      if(this.agency.email=="") {
          this.toastr.error("l'email est obligatoire");
          return;
      }
      if(this.agency.country=="") {
          this.toastr.error("le champs pays est obligatoire");
          return;
      } if(this.agency.password=="") {
          this.toastr.error("le champs password est obligatoire  est obligatoire");
          return;
      }
      if(this.agency.passwordConfirmation=="") {
          this.toastr.error("le champs confirmation de mote de passe est obligatoire");
          return;
      }

          if(this.agency.password!=this.agency.passwordConfirmation) {
              this.toastr.error("le mot de passe et la confirmation de mot de passe ne correspendent pas");
              return;
          }



          this.agenceService.save(this.agency).subscribe((response : any)=>{

                  this.agency = {
                      description: "",
                      password: "",
                      activity: "",
                      agency: "",
                      country: "",
                      email: "",
                      id: 0,
                      image: null,
                      phone_number: "",
                      representative: "",
                      passwordConfirmation: "",
                      approved:false,
                  };
                  this.toastr.success('Votre agence a été ajoutée avec succés')
                  this.router.navigate(["/agencies/list"]);

              },
              (err: HttpErrorResponse) => {
                  console.log(err);
                  this.toastr.error("Il faut remplir tous les champs","Échec d'ajout de l'agence");

              },
              () => {

              })
      }
      else{
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

                  this.toastr.success("L'agence a été modifiée avec succés","Succés",)
                  this.router.navigate(["/agencies/list"]);

              },
              (err: HttpErrorResponse) => {
                      console.log(err);
                      this.toastr.error("Échec de modification");
              },
              () => {

              })
      }

  }


    onActivityChanges(event: any): void {
        if (event.target.checked) {
            this.activity.push(event.target.defaultValue);
        } else {
            this.activity.forEach(
                (item, index) => {
                    if (item === event.target.value) {
                        this.activity.splice(index, 1);
                    }
                }
            );
        }

        this.agency.activity = this.activity.toString();
    }

    resetAgence() {

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
            approved:false
        };
    }
    validatePhoneNumber(event: KeyboardEvent): void {
        const key = event.key;
        if (isNaN(Number(key))) {
            event.preventDefault();
        }
    }


}
