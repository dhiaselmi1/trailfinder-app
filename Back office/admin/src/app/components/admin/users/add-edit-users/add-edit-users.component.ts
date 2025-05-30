import {Component, OnInit} from '@angular/core';
import {AgencesService} from "../../../../_services/agences.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {UserService} from "../../../../_services/user.service";
import {EventModel} from "../../../../_models/event.model";
import {EventService} from "../../../../_services/event.service";
import {RoleService} from "../../../../_services/role.service";
import {RoleModel} from "../../../../_models/role.model";

@Component({
  selector: 'ps-add-edit-users',
  templateUrl: './add-edit-users.component.html',
  styleUrls: ['./add-edit-users.component.scss']
})
export class AddEditUsersComponent implements OnInit{
  user:any;
  isCreateUser = true;
  data: RoleModel[] = [];

  constructor(private userService:UserService,private toastr:ToastrService,
              private activatedRoute:ActivatedRoute,   private router: Router   , private roleService: RoleService
  ) {
  }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data['user'];
    if (this.user && this.user.id > 0) {
      this.isCreateUser = false;
      this.user.password = '';
      console.log(this.user);
    } else {
      this.isCreateUser = true;
    }
    this.loadData();

  }

  file:File;
  getFile(event:any){
    this.file= event.target.files[0];
    this.user.image = this.file;
    console.log('file',this.file);
  }

  loadData() {
    this.roleService.getAll().subscribe(
        (response: any) => {
          this.data = response;
          this.data.splice(0, 2);
        },
        () => {},
        () => {
        }
    );
  }





  saveUser(){

    if(this.isCreateUser)
    {
      if(this.user.role_id==0) {
        this.toastr.error("Il faut séléctionner un role");
        return;
      }if(this.user.first_name=="") {
        this.toastr.error("le prénom d'utilisateur est obligatoire");
        return;
      }
      if(this.user.last_name=="") {
        this.toastr.error("le nom d'utilisateur est obligatoire");
        return;
      }
      if(this.user.phone_number=="") {
        this.toastr.error("le numéro de téléphone est obligatoire");
        return;
      }
      if(this.user.email=="") {
        this.toastr.error("l'email est obligatoire");
        return;
      }
      if(this.user.country=="") {
        this.toastr.error("le champs pays est obligatoire");
        return;
      } if(this.user.password=="") {
      this.toastr.error("le champs password est obligatoire  est obligatoire");
      return;
    }
      if(this.user.passwordConfirmation=="") {
        this.toastr.error("le champs confirmation de mote de passe est obligatoire");
        return;
      }

      if(this.user.password!=this.user.passwordConfirmation) {
        this.toastr.error("le mot de passe et la confirmation de mot de passe ne correspendent pas");
        return;
      }
      this.userService.save(this.user).subscribe(()=>{

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
            };
            this.toastr.success("L'utlisateur a été ajouté avec succés")
            this.router.navigate(["/users/list"]);

          },
          (err: HttpErrorResponse) => {
            console.log(err);
            this.toastr.error("Échec d'ajout");

          },
          () => {

          })
    }
    else{
      this.userService.update(this.user).subscribe((response : any)=>{

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
            };
            this.toastr.success("L'utilisateur a été modifié avec succés")
            this.router.navigate(["/users/list"]);

          },
          (err: HttpErrorResponse) => {
            this.toastr.error('Échec de modification');
            console.log(err);
          },
          () => {

          })
    }

  }




  resetUser() {

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
    };
  }
  validatePhoneNumber(event: KeyboardEvent): void {
    const key = event.key;
    if (isNaN(Number(key))) {
      event.preventDefault();
    }
  }

}
