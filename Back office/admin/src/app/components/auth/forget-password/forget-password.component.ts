import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../_services/auth.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {Forget_passwordModel} from "../../../_models/forget_password.model";

@Component({
  selector: 'ps-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements  OnInit{
email:String;
request:Forget_passwordModel;
  value1: string = '';
  value2: string = '';
  value3: string = '';
  value4: string = '';
  value5: string = '';
  value6: string = '';
  constructor( private  authService:AuthService,private toastr:ToastrService,
               private activatedRoute:ActivatedRoute,    private router: Router) {
  }
  ngOnInit(): void {
this.request =
    {
      email :"",
      token :"",
      password :"",
      passwordConfirmation:"",
    }
  }
    changePassword()
  {
this.request.token = this.value1 + this.value2 + this.value3+this.value4+this.value5+this.value6;
this.request.email = this.email;
   this.authService.changePassword(this.request).subscribe((response : any)=>{
           this.router.navigate(['/auth/login']);
           this.toastr.success("mot de passe modifié avec succés ");

       },
       (err: HttpErrorResponse) => {
         console.log(err);
         this.toastr.error("données  invalide");

       },
       () => {

       })

  }
   sendMail()
  {

      this.authService.sendCode(this.email).subscribe((response : any)=>{
              this.toastr.success("un code est envoyé a cet email ");
          },
          (err: HttpErrorResponse) => {
            console.log(err);
            this.toastr.error("email invalide");

          },
          () => {

          })
  }
}
