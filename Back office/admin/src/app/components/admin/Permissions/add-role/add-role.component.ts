import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environments/environment.prod";
import {UserService} from "../../../../_services/user.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {RoleService} from "../../../../_services/role.service";
import {RoleModel} from "../../../../_models/role.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'ps-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements  OnInit{
  role:RoleModel;
  constructor(private roleService:RoleService,private toastr:ToastrService,
              private activatedRoute:ActivatedRoute,   private router: Router
  ) {
  }

  ngOnInit(): void {

    this.role = {
      id:0,
      name:"",
      description:"",
      removable:false
    };
    }


  saveRole()
  {
    this.roleService.save(this.role).subscribe((response:any)=>{
this.role = {
            id:0,
            name:"",
            description:"",
            removable:false
          };
          this.toastr.success("Le role a été ajouté avec succés")
          this.router.navigate(["/permissions/permission"]);

        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.toastr.error("Échec d'ajout");

        },
        () => {

        })
  }
  resetRole()
  {
    this.role = {
      id:0,
      name:"",
      description:"",
      removable:false
    };
  }
}
