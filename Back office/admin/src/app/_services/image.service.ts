import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment.prod";
import {AgencyModel} from "../_models/agency.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ImageService
{

    private  url = environment.host+'gestion/image';
    private  url1 = environment.host+'gestion/image1';
    private headers = new HttpHeaders();
    constructor(private http: HttpClient) {
    }
    save(ressource: any) {
        const formData = new FormData();
        formData.append('logo', ressource.logo);
        formData.append('partner_id', ressource.partner_id.toString());
        return this.http.post(this.url,formData,{headers: this.headers} );
    }
    save1(ressource: any) {
        const formData = new FormData();
        formData.append('logo', ressource.logo);
        formData.append('event_id', ressource.event_id.toString());
        return this.http.post(this.url1,formData,{headers: this.headers} );
    }
}