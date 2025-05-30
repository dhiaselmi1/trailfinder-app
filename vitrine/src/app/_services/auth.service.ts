import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AssistantModel} from "../_models/assistant.model";
import {LoginModel} from "../_models/login.model";
import {Injectable} from "@angular/core";
import {RegisterModel} from "../_models/register.model";
import {Forget_passwordModel} from "../_models/forget_password.model";
@Injectable({
    providedIn: 'root'
})
export class AuthService{
    private  url = environment.host+'userAuth/log';
    private  url1 = environment.host+'vitrine/auth/register';
    private  url2 = environment.host+'auth/register';
    private  url3 = environment.host+'auth/forget-password';


    private headers = new HttpHeaders();
    constructor(private http: HttpClient) {
    }
    login(ressource:LoginModel)
    {
        return this.http.post(this.url ,ressource,{headers: this.headers});
    }
    register(ressource:any)
    {
        return this.http.post(this.url1 ,ressource,{headers: this.headers});
    }
    confirm(token:String)
    {
        return this.http.post(this.url1 ,token);
    }  sendCode(email:String)
    {
        return this.http.post(this.url3,email);
    } changePassword(ressource:Forget_passwordModel)
    {
        return this.http.put(this.url3,ressource);
    }
}
