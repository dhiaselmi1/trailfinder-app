import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {inject} from "@angular/core";
import {UserService} from "../_services/user.service";
import {UserModel} from "../_models/user.model";

export const UserResolver:ResolveFn<any> =
    (route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot,
     userService:UserService = inject(UserService)) :Observable<UserModel> =>
{
    const userId = route.paramMap.get("id");

    if(userId) {
        return userService.getUser(Number(userId));
   } else {
        // create and return empty employee details
       const user:UserModel = {
            password: "",
           first_name: "",
            country: "",
            email: "",
            id: 0,
           image:null,
           photo:"",
           imageToShow:null,
           phone_number: "",
            last_name: "",
            passwordConfirmation: "",
           isDropdownOpen:false,
           role_id:0

        }


        return of(user);

    }

}
