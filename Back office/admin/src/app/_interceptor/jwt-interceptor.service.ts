import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../_models/user.model";
import {TokenService} from "../_services/token.service";
import {GlobalsService} from "../_services/globals.service";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{
  constructor(private tokenService: TokenService, public  globalsService: GlobalsService) {
  }

  /*
    Intrcept each request and insert the token in header
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.get();

    let id_utilisateur = "";

    let user = this.globalsService.getCurrentUser();


    if (user && user.id)
     id_utilisateur = String(user.id);


    if (token) {
      const authReq = request.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
       //   'user-id': id_utilisateur,
        })
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
