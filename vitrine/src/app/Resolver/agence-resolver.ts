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


        return agenceService.getAgence(Number(agenceId));






}
