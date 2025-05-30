import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PaymentModel} from "../_models/payment.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PaymentService{
    private  url = environment.host+'payment/create';
    private  url1 = environment.host+'payment/generate';
    private headers = new HttpHeaders();

    constructor(private http: HttpClient) {
    }
    pay(pay:PaymentModel) {
        return this.http.post(this.url,pay,  {responseType: 'text'});
    }
    pay1(amount: String) {
        return this.http.post(this.url1, { amount: amount }, { responseType: 'text' });
    }

}
