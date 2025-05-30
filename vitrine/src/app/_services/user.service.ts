import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../_models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private  url = environment.host+'gestion/user';
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
   */save(ressource: UserModel) {
    const formData = new FormData();
    formData.append('image', ressource.image);
    formData.append('first_name', ressource.first_name.toString());
    formData.append('last_name', ressource.last_name.toString());
    formData.append('email', ressource.email.toString());
    formData.append('phone_number', ressource.phone_number.toString());
    formData.append('password', ressource.password.toString());
    formData.append('country', ressource.country.toString());
    formData.append('role_id',ressource.role_id.toString())






    return this.http.post(this.url,formData,{headers: this.headers} );
  }


  /*
   update Resources
   */
  update(ressource:UserModel) {
      return this.http.put<UserModel>(this.url , ressource, {headers: this.headers});
  }

  /*
    Delete Resources
   */
  delete(id:number) {
    return this.http.delete(this.url + '/' + id);
  }


  getUser(id:number)
  {
    return this.http.get<UserModel>(this.url + '/' + id);
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
