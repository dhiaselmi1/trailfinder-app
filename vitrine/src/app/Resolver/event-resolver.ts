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


            return eventService.getEvent(Number(eventId));



    }
