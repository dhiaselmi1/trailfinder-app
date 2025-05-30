import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {PartnerService} from "../_services/partner.service";
import {Observable, of} from "rxjs";
import {PartnerModel} from "../_models/partner.model";

export const PartnerResolver:ResolveFn<any> = (route: ActivatedRouteSnapshot,
                                               state: RouterStateSnapshot,
                                               partnerService:PartnerService = inject(PartnerService)) :Observable<PartnerModel> =>
{
const partnerId=route.paramMap.get("id");
if(partnerId)
return partnerService.getPartner(Number(partnerId));
else {

const partner:PartnerModel =
    {
        id:0,
        name:"",
        description:"",
        email:"",
        phone_number:"",
        category:"",
        logo:"",
        image:null,
        imageToShow:null,
    }
    return of(partner);
}
}