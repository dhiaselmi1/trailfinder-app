import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FeedbackModel} from "../_models/feedback.model";


@Injectable({
    providedIn: 'root'
})
export class FeedbackService{
    private  url = environment.host+'gestion/feedback';
    private  url1 = environment.host+'gestion/feedbackEvent';
    private headers = new HttpHeaders();
    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get(this.url, {});
    } getByEvent(id:number) {
        return this.http.get(this.url1+ '/' + id);
    }

    delete(id:number) {
        return this.http.delete(this.url + '/' + id);
    }

    save(resource:FeedbackModel)
    {
        return this.http.post(this.url ,resource,{headers: this.headers});
    }

}
