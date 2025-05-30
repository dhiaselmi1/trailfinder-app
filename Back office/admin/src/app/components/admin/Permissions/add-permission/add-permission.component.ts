import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {PermissionService} from "../../../../_services/permission.service";
import {PermissionModel} from "../../../../_models/permission.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'ps-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: ['./add-permission.component.scss']
})
export class AddPermissionComponent implements OnInit{

permission:PermissionModel;


  constructor(private permissionService:PermissionService,private toastr:ToastrService,
              private activatedRoute:ActivatedRoute,   private router: Router
  ) {
  }
    ngOnInit(): void {
      this.permission = {
        id:0,
        title:"",
        description:"",
      };
    }
  savePermission()
  {
    this.permissionService.save(this.permission).subscribe((response:any)=>{
          this.permission = {
            id:0,
            title:"",
            description:"",
          };
          this.toastr.success("La permission a été ajoutée avec succés")
          this.router.navigate(["/permissions/permission"]);

        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.toastr.error("Échec d'ajout");

        },
        () => {

        })
  }
  resetPermission()
  {
    this.permission = {
      id:0,
      title:"",
      description:"",
    };
  }




}
