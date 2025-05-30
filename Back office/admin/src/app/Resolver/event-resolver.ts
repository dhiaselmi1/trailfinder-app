import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {inject} from "@angular/core";
import {EventService} from "../_services/event.service";
import {EventModel} from "../_models/event.model";

export const EventResolver:ResolveFn<any> =
    (route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot,
     eventService:EventService = inject(EventService)) :Observable<EventModel> =>
    {
        const eventId = route.paramMap.get("id");

        if(eventId) {
            return eventService.getEvent(Number(eventId));
        } else {
            // create and return empty employee details
            const event:EventModel = {
                id:0,
                name:"",
                capacity:0,
                duration:"",
                agencyId:0,
                ticket_price:0,
                date: null,
                time:null,
                location:"",
                category:"",
                currency:"",
                description:"",
                image:null ,
                poster:"",
                imageToShow:null,
                agencyName:null,
            }


            return of(event);

        }

    }
