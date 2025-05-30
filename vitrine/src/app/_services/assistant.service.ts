import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RoleModel} from "../_models/role.model";
import {AssistantModel} from "../_models/assistant.model";

@Injectable({
    providedIn: 'root'
})
export class AssistantService{
    private  url = environment.host+'gestion/assistant';
    private headers = new HttpHeaders();
    constructor(private http: HttpClient) {
    }
    delete(id:number) {
        return this.http.delete(this.url + '/' + id);
    }
    getAll() {
        return this.http.get(this.url, {});
    }
    getAssistant(id:number) {
        return this.http.get(this.url + '/' + id);
    }
    save(resource:AssistantModel)
    {
        return this.http.post(this.url ,resource,{headers: this.headers});
    }

}