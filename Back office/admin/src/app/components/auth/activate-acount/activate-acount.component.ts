import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../../_services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";
import {LoginModel} from "../../../_models/login.model";

@Component({
  selector: 'ps-activate-acount',
  templateUrl: './activate-acount.component.html',
  styleUrls: ['./activate-acount.component.scss']
})

export class ActivateAccountComponent implements OnInit{
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

    };

  activate()
  {
    const code = this.value1 + this.value2 + this.value3+this.value4+this.value5+this.value6;


   this.authService.confirm(code).subscribe((response : any)=>{
          this.router.navigate(['/auth/login']);
           this.toastr.success("Compte activé avec succés");
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.toastr.error("Données invalides");

        },
        () => {

        })



  }

}