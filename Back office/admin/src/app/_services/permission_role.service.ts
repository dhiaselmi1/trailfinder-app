import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Permission_roleModel} from "../_models/permission_role.model";

@Injectable({
    providedIn: 'root'
})
export class Permission_roleService{
    private  url = environment.host+'gestion/permissionRole';
    private  url1 = environment.host+'gestion/rolePermission';
    private headers = new HttpHeaders();
    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get(this.url, {});
    } isPresent(resource:Permission_roleModel) {
        return this.http.post(this.url1,resource,{});
    }

    delete(resource:Permission_roleModel) {
        return this.http.put(this.url,resource,{});
    }
      save(resource:Permission_roleModel) {
        return this.http.post(this.url,resource, {});
    }

}