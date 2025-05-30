import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../../_services/auth.service";
import {RegisterModel} from "../../../../_models/register.model";
import {HttpErrorResponse} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'ps-content-auth',
  templateUrl: './content-auth.component.html',
  styleUrls: ['./content-auth.component.scss']
})
export class ContentAuthComponent implements OnInit{
  public signup: boolean;
  public registraionForm: FormGroup;
  register:RegisterModel;
  message:Boolean = false;
  constructor(
 private   authService:AuthService,private toastr:ToastrService,
      private route: ActivatedRoute) {
    const url = this.route.snapshot.url;
    if (url[0].path === 'simple-login') {
      this.signup = false;
    }
  }

  ngOnInit(): void {
    this.register = {
representative:"",
      agency:"",
      phone_number:"",
      email:"",
      password: "",
passwordConfirmation:""    };
  }

  public toggle() {
    this.signup = !this.signup;
  }
  public validate()
  {this.authService.register(this.register).subscribe((response : any)=>{
          this.register = {
            representative:"",
            agency:"",
            phone_number:"",
            email:"",
            password: "",
              passwordConfirmation:""
          };
          this.toastr.success("Nous vous enverrons un e-mail de confirmation dans les plus brefs délais ");

this.message = true;
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.toastr.error("Données invalides");

        },
        () => {

        })
  }
}
