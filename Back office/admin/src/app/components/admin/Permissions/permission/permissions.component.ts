import {Component, OnInit} from '@angular/core';
import {RoleService} from "../../../../_services/role.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {RoleModel} from "../../../../_models/role.model";
import {AgencyModel} from "../../../../_models/agency.model";
import {HttpErrorResponse} from "@angular/common/http";
import {PermissionService} from "../../../../_services/permission.service";
import {PermissionModel} from "../../../../_models/permission.model";
import {Permission_roleService} from "../../../../_services/permission_role.service";
import {Permission_roleModel} from "../../../../_models/permission_role.model";

@Component({
  selector: 'ps-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {
    showDelete: boolean = false;
    roles: RoleModel[] = [];
    permissions: PermissionModel[] = [];
    applyGradient: boolean = false;
    permissionRole: Permission_roleModel;
    permissionRoles: Permission_roleModel[] = [];
    role:RoleModel;
    constructor(private roleService: RoleService, private permissionService: PermissionService, private permissionRoleService: Permission_roleService,

    ) {
    }

    ngOnInit(): void {
        this.permissionRole = {
            permission_id: 0,
            role_id: 0,
            isPresent: false
        };
        this.loadRoles();
        this.loadPermissions();
        this.loadPermissionRoles();
    }



    loadRoles() {
        this.roleService.getAll().subscribe(
            (response: any) => {
                this.roles = response;
            },
            (err: HttpErrorResponse) => {
                console.log(err);
            },
            () => {
            }
        );
    }



    loadPermissionRoles() {
        this.permissionRoleService.getAll().subscribe(
            (response: any) => {
                console.log(response);
                this.permissionRoles = response;
            },
            (err: HttpErrorResponse) => {
                console.log(err);
            },
            () => {
            }
        );
    }

    loadPermissions() {
        this.permissionService.getAll().subscribe(
            (response: any) => {
                this.permissions = response;
            },
            (err: HttpErrorResponse) => {
                console.log(err);
            },
            () => {
            }
        );
    }


    handleChange($event: Event, id1: number, id2: number) {
        if (event.target instanceof HTMLInputElement && event.target.checked) {
            this.addPermissionRole(id1, id2);
        } else {
            this.delete(id1, id2);
        }
    }


    private addPermissionRole(id1: number, id2: number) {
        this.permissionRole.permission_id = id1;
        this.permissionRole.role_id = id2;
        this.permissionRoleService.save(this.permissionRole).subscribe(() => {
            },
            (err: HttpErrorResponse) => {
                console.log(err);
            },
            () => {
            }
        );
    }

    private delete(id1: number, id2: number) {
        this.permissionRole.permission_id = id1;
        this.permissionRole.role_id = id2;
        this.permissionRoleService.delete(this.permissionRole).subscribe(() => {
            },
            (err: HttpErrorResponse) => {
                console.log(err);
            },
            () => {
            }
        );

    }




    isChecked(id1: number, id2: number): boolean {
        for (const permissionRole of this.permissionRoles) {
            if (permissionRole.permission_id === id1 && permissionRole.role_id === id2) {
                return true;
            }
        }
        return false;
    }
deleteRole(id:number)
{ this.roleService.delete(id).subscribe(() => {

        window.location.reload();

    },
    (err: HttpErrorResponse) => {
        console.log(err);
    },
    () => {
    }
);

}
    openDelete(role:RoleModel) {
        this.role = role;
        this.showDelete = true;
    }
    closeDelete() {
        this.showDelete = false;
    }
}





