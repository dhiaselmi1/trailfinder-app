import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AgencyModel} from "../_models/agency.model";
import {ReservationModel} from "../_models/reservation.model";
@Injectable({
    providedIn: 'root'
})
export class ReservationService{
    private  url = environment.host+'gestion/reservation';
    private  url1 = environment.host+'gestion/reservationUser';

    private headers = new HttpHeaders();
    constructor(private http: HttpClient) {
    }
    getAll() {
        return this.http.get(this.url, {});
    }
    save(reservation: ReservationModel[]) {
        return this.http.post(this.url, reservation, { headers: this.headers, responseType: 'blob' });
    }
    getByUser(id:number) {
        return this.http.get(this.url1 + '/' + id);
    } getByEvent(id:number) {
        return this.http.get(this.url + '/' + id);
    }
}