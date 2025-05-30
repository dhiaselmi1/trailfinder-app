import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AgencyModel} from "../_models/agency.model";
import {ReservationModel} from "../_models/reservation.model";
@Injectable({
    providedIn: 'root'
})
export class PurchaseService{
    private  url = environment.host+'gestion/purchase';

    private headers = new HttpHeaders();
    constructor(private http: HttpClient) {
    }
    getAll() {
        return this.http.get(this.url, {});
    }
    save(purchase:any) {
        return this.http.post(this.url, purchase, { headers: this.headers,  });
    }

}
