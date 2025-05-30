import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class DashboardService{
    private  url = environment.host+'dash';
    private headers = new HttpHeaders();
    constructor(private http: HttpClient) {
    }
    getBarchart() {
        return this.http.get(this.url+ '/barchart', {});
    } getSingleBarchart() {
        return this.http.get(this.url+ '/singlebarchart', {});
    }
    getResultchart() {
        return this.http.get(this.url+ '/resultchart', {});
    } getRadarchart() {
        return this.http.get(this.url+ '/radarchart', {});
    } getSinglePieChart() {
        return this.http.get(this.url+ '/singlePieChart', {});
    }getPieChart3() {
        return this.http.get(this.url+ '/PieChart3', {});
    }getPieChart() {
        return this.http.get(this.url+ '/PieChart', {});
    }
    getRevenueTotal() {
        return this.http.get(this.url+ '/revenueTotal', {});
    } getTopAgencies() {
        return this.http.get(this.url+ '/topagencies', {});
    }getTotalCount() {
        return this.http.get(this.url+ '/totalcount', {});
    }

}