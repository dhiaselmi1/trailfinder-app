import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RoleModel} from "../_models/role.model";
import {PermissionModel} from "../_models/permission.model";

@Injectable({
    providedIn: 'root'
})
export class PermissionService
{
    private  url = environment.host+'gestion/permission';
    private headers = new HttpHeaders();
    constructor(private http: HttpClient) {
    }
    getAll() {
        return this.http.get(this.url, {});
    }
    getPermission(id:number) {
        return this.http.get(this.url + '/' + id);
    }
    delete(id:number) {
        return this.http.delete(this.url + '/' + id);
    }

    save(resource:PermissionModel)
    {
        return this.http.post(this.url ,resource,{headers: this.headers});
    }


}