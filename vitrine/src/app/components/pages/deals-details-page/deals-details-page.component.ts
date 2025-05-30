import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {EventService} from "../../../_services/event.service";
import {AgencesService} from "../../../_services/agences.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {AgencyModel} from "../../../_models/agency.model";
import {FeedbackModel} from "../../../_models/feedback.model";
import {FeedbackService} from "../../../_services/feedback.service";
import {UserService} from "../../../_services/user.service";
import {PaymentModel} from "../../../_models/payment.model";
import {CartService} from "../../../_services/cart.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
    selector: 'app-deals-details-page',
    templateUrl: './deals-details-page.component.html',
    styleUrls: ['./deals-details-page.component.scss']
})
export class
DealsDetailsPageComponent implements OnInit {
data:any;
feedback:FeedbackModel;
    days: any;
    hours: any;
    minutes: any;
    seconds: any;
    myInterval: any;
    event:any = {};
    payment:PaymentModel;
euro:number;
url: string = "https://www.google.com/maps/place/Douz/@33.4626991,9.0067074,14z/data=!3m1!4b1!4m6!3m5!1s0x125687f0a48f8aa3:0xf20af06731ebe68d!8m2!3d33.4614354!4d9.0294708!16zL20vMDQzMXo4?entry=ttu";
index:number;
    dollar:any;
timeLeft:number;
    url1: SafeResourceUrl;

    constructor(private eventService: EventService,
    private agencesService: AgencesService,
                private userService: UserService,private cartService : CartService,private domSanitizer: DomSanitizer,

                private feedbackService: FeedbackService,
                private route: ActivatedRoute,
                private activatedRoute:ActivatedRoute,
    private router: Router) {


        }

    ngOnInit() {

       this.loadEventData();
       this.feedback ={
           stars:0,
           description:"",
           title:"",
           user_id:0,
           event_id:0,
           id:0
        }
        this.loadData();
       this.payment = {
           amount:"",
           description:"",
           method:""
        }


    }


    pageTitle = [
        {
            bgImage: `assets/img/evenements/output_image.jpeg`,
            title: `Medina Mirage`,
        }
    ]


    commingSoonTime = () => {

        const eventDate = this.event.event.date; // Date in format 'yyyy-mm-dd'
        const eventTime = this.event.event.time; // Time in format 'hh:mm:ss'

        const [year, month, day] = eventDate.split('-').map(Number);
        const [hours, minutes, seconds] = eventTime.split(':').map(Number);
        const now = new Date();
        const endTime = new Date(year, month - 1, day, hours, minutes, seconds);
     this.timeLeft = endTime.getTime() - now.getTime();
        const timeLeftInSeconds = Math.floor(this.timeLeft / 1000);

        const days = Math.floor(timeLeftInSeconds / 86400);
        let hoursRemaining = Math.floor((timeLeftInSeconds % 86400) / 3600);
        let minutesRemaining = Math.floor((timeLeftInSeconds % 3600) / 60);
        let secondsRemaining = Math.floor(timeLeftInSeconds % 60);
        const formattedHours = hoursRemaining < 10 ? `0${hoursRemaining}` : String(hoursRemaining);
        const formattedMinutes = minutesRemaining < 10 ? `0${minutesRemaining}` : String(minutesRemaining);
        const formattedSeconds = secondsRemaining < 10 ? `0${secondsRemaining}` : String(secondsRemaining);
        this.days = days;
        this.hours = formattedHours;
        this.minutes = formattedMinutes;
        this.seconds = formattedSeconds;
    }

    dealsDetailsImageSlides: OwlOptions = {
		items: 1,
		nav: true,
		loop: true,
		dots: false,
		autoplay: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		]
    }
    loadImage(filename: String): Promise<String> {
        return new Promise((resolve, reject) => {
            this.eventService.getImage(filename).subscribe(
                (response: Blob) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const imageDataUrl = reader.result as String;
                        resolve(imageDataUrl); // Résoudre la promesse avec l'URL de données de l'image
                    };

                    if (response) {
                        reader.readAsDataURL(response);
                    }
                },
                (err: HttpErrorResponse) => {
                    console.log(err);
                    reject(err); // Rejeter la promesse en cas d'erreur
                }
            );
        });
    }
    async getAgencyName(id: number): Promise<AgencyModel> {
        try {
            const agency = await this.agencesService.getAgence(id).toPromise();

            return agency; // Supposant que le nom de l'agence est stocké dans la propriété 'nom' de l'objet 'AgencyModel'
        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération du nom de l'agence :", error);
            return null; // Ou une valeur par défaut en cas d'erreur
        }
    }
    async loadEventData() {
        try {
            this.event = this.activatedRoute.snapshot.data['event'];
            Object.assign(this.event, {quantity: 1, total: this.event.event.ticket_price});
            this.event.event.imageToShow = await this.loadImage(this.event.event.poster);
            this.event.agency = await this.getAgencyName(this.event.agencyId);
            this.event.agency.imageToShow= await this.loadImage1(this.event.agency.logo)
            this.url1= this.domSanitizer.bypassSecurityTrustResourceUrl(this.event.event.localisation);

            this.euro = this.event.event.ticket_price * 0.3;
            this.dollar = this.event.event.ticket_price * 0.32;
            this.dollar = this.dollar.toFixed(1);
            Object.assign(this.event.event,{quantity:1,total: this.dollar,type:"event"});
           this.event.event.images.forEach((image: any) => {
 image.show=this.loadImage(image.image);});
            console.log(this.event);
            this.myInterval = setInterval(() => {
                this.commingSoonTime();
            }, 0);
        } catch (error) {
            console.error("Error loading event data:", error);
        }
    }
    loadImage1(filename: String): Promise<String> {
        return new Promise((resolve, reject) => {
            this.agencesService.getImage(filename).subscribe(
                (response: Blob) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const imageDataUrl = reader.result as String;
                        resolve(imageDataUrl); // Résoudre la promesse avec l'URL de données de l'image
                    };

                    if (response) {
                        reader.readAsDataURL(response);
                    }
                },
                (err: HttpErrorResponse) => {
                    console.log(err);
                    reject(err);
                }
            );
        });
    }

    save() {
        if (localStorage.getItem("id")) {
            this.feedback.user_id=Number(localStorage.getItem("id"));
            this.feedback.event_id = this.event.event.id;
            console.log(this.feedback);
            this.feedbackService.save(this.feedback).subscribe(() => {
                    this.feedback = {
                        stars: 0,
                        description: "",
                        title: "",
                        user_id: 0,
                        event_id: 0,
                        id: 0
                    }
                },
                (err: HttpErrorResponse) => {
                    console.log(err);

                },
                () => {
                }
            );
        }
        else
        {
            this.router.navigate(["/profile-authentication"])
        }
    }
    loadData() {
        this.feedbackService.getByEvent(this.event.event.id).subscribe(
            (response: any) => {
                this.data = response;
                this.data.forEach((item:any) => {
                        item.imageToShow=this.loadImage2(item.user.photo);
   })

            },
            () => {
            },
            () => {
            }
        );
    }
    loadImage2(filename: String): Promise<String> {
        return new Promise((resolve, reject) => {
            this.userService.getImage(filename).subscribe(
                (response: Blob) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const imageDataUrl = reader.result as String;
                        resolve(imageDataUrl); // Résoudre la promesse avec l'URL de données de l'image
                    };

                    if (response) {
                        reader.readAsDataURL(response);
                    }
                },
                (err: HttpErrorResponse) => {
                    console.log(err);
                    reject(err);
                }
            );
        });
    }
    navigate(id:number) {
        this.router.navigate(['/agence', {id: id}]);
    }


    addToCart(item: any){

        this.cartService.addtoCart(item);
    }
}
