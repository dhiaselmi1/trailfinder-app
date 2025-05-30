import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {AgencesService} from "../_services/agences.service";
import {AgencyModel} from "../_models/agency.model";
import {Observable, of} from "rxjs";
import {inject} from "@angular/core";

export const AgenceResolver:ResolveFn<any> =
    (route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot,
     agenceService:AgencesService = inject(AgencesService)) :Observable<AgencyModel> =>
{
    const agenceId = route.paramMap.get("id");

    if(agenceId) {
        return agenceService.getAgence(Number(agenceId));
   } else {
        // create and return empty employee details
       const agency:AgencyModel = {
            description: "",
            password: "",
            activity: "",
            agency: "",
            country: "",
            email: "",
            id: 0,
           image:null,
           logo:"",
           imageToShow:null,
           phone_number: "",
            representative: "",
            passwordConfirmation: "",
           isDropdownOpen:false,
            approved:false
        }


        return of(agency);

    }

}
