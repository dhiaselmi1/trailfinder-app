import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {PartnerService} from "../_services/partner.service";
import {Observable, of} from "rxjs";
import {PartnerModel} from "../_models/partner.model";

export const PartnerResolver:ResolveFn<any> = (route: ActivatedRouteSnapshot,
                                               state: RouterStateSnapshot,
                                               partnerService:PartnerService = inject(PartnerService)) :Observable<PartnerModel> =>
{
const partnerId=route.paramMap.get("id") ;
return partnerService.getPartner(Number(partnerId));

}
