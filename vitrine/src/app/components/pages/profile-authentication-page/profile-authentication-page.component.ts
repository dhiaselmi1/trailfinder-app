import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../_services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {LoginModel} from "../../../_models/login.model";


@Component({
    selector: 'app-profile-authentication-page',
    templateUrl: './profile-authentication-page.component.html',
    styleUrls: ['./profile-authentication-page.component.scss']
})
export class ProfileAuthenticationPageComponent implements OnInit {
    login:LoginModel;
    isChecked:boolean= false;

    constructor( private router: Router,private Auth:AuthService) { }



    pageTitle = [
        {
            bgImage: `assets/img/page-title/page-title4.jpg`,
            title: `Profile Authentication`
        }
    ]

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
        this.Auth.login(this.login).subscribe((response : any)=>{
                if(this.isChecked)
                {                    localStorage.setItem("password",this.login.password);
                }
                this.login = {
                    login:"",
                    password: "",

                };
localStorage.clear();
              console.log(response);

                localStorage.setItem("id",response.user.id);





                this.router.navigate([""]);

            },
            (err: HttpErrorResponse) => {
                console.log(err);

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
