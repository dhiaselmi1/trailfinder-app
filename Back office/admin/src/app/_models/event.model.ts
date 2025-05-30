import {LocalDateTime, LocalTime} from "@js-joda/core";

export class EventModel
{
    id:number;
    name:String;
    capacity:number;
    ticket_price:number;
    agencyId:number;
     date: LocalDateTime;
     time:LocalTime;
     duration:String;
    location:String;
    category:String;
    currency:String;
    description:String;
    image:File ;
    poster:String;
    imageToShow:Promise<String>;
    agencyName:Promise<String>;
}