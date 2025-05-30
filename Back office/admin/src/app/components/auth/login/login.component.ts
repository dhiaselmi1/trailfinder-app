import {Component, OnInit} from '@angular/core';
import {LoginModel} from "../../../_models/login.model";
import {AuthService} from "../../../_services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenService} from "../../../_services/token.service";
import {NgxPermissionsService} from "ngx-permissions";
import {AppStateService} from "../../../_services/AppState.service";

@Component({
  selector: 'ps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  login:LoginModel;
isChecked:boolean= false;
  constructor( private  authService:AuthService,private toastr:ToastrService,
               private activatedRoute:ActivatedRoute,    private router: Router, private token:TokenService,
private permissionsService: NgxPermissionsService,private appStateService: AppStateService ) {
  }

ngOnInit(): void {
    this.login = {
        login:"",
        password: "",

    };
if(localStorage.getItem("password")!=null)
{
    this.login.password = localStorage.getItem("password");
    this.login.login = localStorage.getItem("login");
    this.isChecked = true;
}

}

  log = () => {
    this.authService.login(this.login).subscribe((response : any)=>{
if(this.isChecked)
{                    localStorage.setItem("password",this.login.password);
}
            this.login = {
            login:"",
            password: "",

          };
            localStorage.setItem("permissions",JSON.stringify(response.permissions));
            const perm = JSON.parse(localStorage.getItem("permissions"));
            this.permissionsService.loadPermissions(perm);
            console.log(this.permissionsService.getPermissions())
            localStorage.setItem("role",response.role);
            if(localStorage.getItem("role")=="Agence")

                localStorage.setItem("id",response.id);

         if(localStorage.getItem("role")=="Admin")
         localStorage.setItem("login",response.user.login);


        else {
             localStorage.setItem("login",response.user.agency);
         }
         this.token.set(response.token);

                this.router.navigate(["/dashboard/dashboard"]);

        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.toastr.error("Données invalides");

        },
        () => {

        })



  };

    onCheckboxChange($event: Event) {

        const isChecked = (event.target as HTMLInputElement).checked;
        if(isChecked) {
            // La case à cocher est cochée, appelez votre fonction ici
                    localStorage.setItem("password",this.login.password);
            this.isChecked = true;

        }
        else {
            localStorage.removeItem('password');
            this.isChecked = false;

        }
    }
}
