import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EventModel} from "../_models/event.model";

@Injectable({
    providedIn: 'root'
})
export class DashagenceService {


    private url = environment.host + 'dashagence';
    private headers = new HttpHeaders();

    constructor(private http: HttpClient) {

    }

    getEvent(id: number) {
        return this.http.get(this.url + '/event/' + id);
    }

    getTotalCount(id: number) {
        return this.http.get(this.url + '/totalcount/' + id);
    }

    getSinglePieChart(id: number) {
        return this.http.get(this.url + '/singlePieChart/' + id);
    }

    getPieChart3(id: number) {
        return this.http.get(this.url + '/PieChart3/' + id);
    }

    getPieChart(id: number) {
        return this.http.get(this.url + '/PieChart/' + id);
    }

    getRevenueTotal(id: number) {
        return this.http.get(this.url + '/revenueTotal/' + id);
    }
}