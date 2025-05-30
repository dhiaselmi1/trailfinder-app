import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {AgencyModel} from "../_models/agency.model";
import {PartnerModel} from "../_models/partner.model";

@Injectable({
    providedIn: 'root'
})
export class PartnerService
{

    private url = environment.host+'gestion/partner';
    private headers = new HttpHeaders();
    constructor(private http: HttpClient) {
    }
    getAll() {
        return this.http.get(this.url, {});
    }
    delete(id:number) {
        return this.http.delete(this.url + '/' + id);
    }
    getImage(fileName: String): Observable<Blob> {
        return this.http.get(this.url + '/image/' + fileName, { responseType: 'blob' });
    }
    updateImage(image:File,id:number)
    {    const formData = new FormData();

        formData.append('image', image);
        formData.append('id', id.toString());
        return this.http.put(this.url+'/image',formData,{headers: this.headers});
    }
    save(ressource: PartnerModel) {
        const formData = new FormData();
        formData.append('logo', ressource.image);
        formData.append('name', ressource.name.toString());
        formData.append('email', ressource.email.toString());
        formData.append('phone_number', ressource.phone_number.toString());
        formData.append('category', ressource.category.toString());
        formData.append('description', ressource.description.toString());





        return this.http.post(this.url,formData,{headers: this.headers} );
    }
    update(ressource:PartnerModel) {
        return this.http.put(this.url , ressource, {headers: this.headers});
    }
    getPartner(id:number)
    {
        return this.http.get<PartnerModel>(this.url + '/' + id);
    }
}