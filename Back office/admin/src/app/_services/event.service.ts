import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserModel} from "../_models/user.model";
import {Observable} from "rxjs";
import {EventModel} from "../_models/event.model";
@Injectable({
    providedIn: 'root'
})
export class EventService{
    private  url = environment.host+'gestion/event';
    private headers = new HttpHeaders();
    constructor(private http: HttpClient) {
    }
    getAll() {
        return this.http.get(this.url, {});
    }

    /*
       Add new element
     */save(ressource: EventModel) {
        const formData = new FormData();
        formData.append('image', ressource.image);
        formData.append('name', ressource.name.toString());
        formData.append('capacity', ressource.capacity.toString());
        formData.append('ticket_price', ressource.ticket_price.toString());
        formData.append('agency_id', ressource.agencyId.toString());
        formData.append('date', ressource.date.toString());
        formData.append('time', ressource.time.toString());
        formData.append('duration', ressource.duration.toString());
        formData.append('location', ressource.location.toString());
        formData.append('category', ressource.category.toString());
        formData.append('description', ressource.description.toString());






        return this.http.post(this.url,formData,{headers: this.headers} );
    }


    /*
     update Resources
     */
    update(ressource:EventModel) {
        return this.http.put<UserModel>(this.url , ressource, {headers: this.headers});
    }

    /*
      Delete Resources
     */
    delete(id:number) {
        return this.http.delete(this.url + '/' + id);
    }


    getEvent(id:number)
    {
        return this.http.get<EventModel>(this.url + '/' + id);
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