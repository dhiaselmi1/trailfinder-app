import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AgencyModel} from "../_models/agency.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AgencesService {

  private  url = environment.host+'gestion/agence';
  private approved = environment.host+'gestion/approuve';
  private headers = new HttpHeaders();
  constructor(private http: HttpClient) {
  }

  /**
   *
   */
  getAll() {
    return this.http.get(this.url, {});
  }

  /*
     Add new element
   */save(ressource: AgencyModel) {
    const formData = new FormData();
    formData.append('image', ressource.image);
    formData.append('representative', ressource.representative.toString());
    formData.append('agency', ressource.agency.toString());
    formData.append('email', ressource.email.toString());
    formData.append('phone_number', ressource.phone_number.toString());
    formData.append('password', ressource.password.toString());
    formData.append('activity', ressource.activity.toString());
    formData.append('country', ressource.country.toString());
    formData.append('description', ressource.description.toString());





    return this.http.post(this.url,formData,{headers: this.headers} );
  }


  /*
   update Resources
   */
  update(ressource:AgencyModel) {
      return this.http.put<AgencyModel>(this.url , ressource, {headers: this.headers});
  }

  /*
    Delete Resources
   */
  delete(id:number) {
    return this.http.delete(this.url + '/' + id);
  }
  approve(id:number)
  {
    return this.http.put(this.approved + '/' + id,{});
  }

  getAgence(id:number)
  {
    return this.http.get<AgencyModel>(this.url + '/' + id);
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
}
