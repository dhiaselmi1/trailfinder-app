import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RoleModel} from "../_models/role.model";

@Injectable({
    providedIn: 'root'
})
export class RoleService{
    private  url = environment.host+'gestion/role';
    private headers = new HttpHeaders();
    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get(this.url, {});
    }
    getRole(id:number) {
        return this.http.get(this.url + '/' + id);
    }
    delete(id:number) {
        return this.http.delete(this.url + '/' + id);
    }

save(resource:RoleModel)
{
    return this.http.post(this.url ,resource,{headers: this.headers});
}

}