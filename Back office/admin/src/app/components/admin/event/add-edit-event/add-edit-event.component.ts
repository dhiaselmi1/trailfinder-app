import {Component, OnInit} from '@angular/core';
import {AgencesService} from "../../../../_services/agences.service";
import {IndividualConfig,ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {EventService} from "../../../../_services/event.service";
import {AgencyModel} from "../../../../_models/agency.model";
// import './add-edit-event.component.scss';


@Component({
  selector: 'ps-add-edit-event',
  templateUrl: './add-edit-event.component.html',
  styleUrls: ['./add-edit-event.component.scss']
})
export class AddEditEventComponent implements OnInit {
  category: string[] = [];
  event: any;
  isCreateEvent = true;
  isFromAgency = true;

  data: any[] = [];
  agency:AgencyModel;
  evenId: number;
  quantity:number=1;
  i=1;
  duration:String;
  constructor(private toastr: ToastrService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private eventService: EventService,
              private agenceService: AgencesService,
  ) {
    this.loadData();

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.evenId = +params['id2'];

    });


    this.event = this.activatedRoute.snapshot.data['Event'];

    if (this.event.event && this.event.event.id > 0) {
      this.isCreateEvent = false;

      if (this.event.event.category != '') {

        this.category = [];
        this.category = this.event.event.category.split(',');

      }

    } else {
      this.event.event = {
        id: 0,
        name: "",
        capacity: 0,
        ticket_price: 0,
        agencyId: 0,
        date: null,
        duration:"",
        time: null,
        location: "",
        category: "",
        currency:"",
        description: "",
        image: null,
        poster: "",
        imageToShow: null,
        agencyName: null
      };
      if (this.evenId) {

        this.event.event.agencyId = this.evenId;

      }

      this.isFromAgency = this.evenId > 0 || this.isCreateEvent == false;
    }
  }
  file: File;

  getFile(event: any) {
    this.file = event.target.files[0];
    this.event.event.image = this.file;

  }


  checkActivity(activity: string) {
    return this.event.event.category != null && this.event.event.category.includes(activity);
  }


  saveEvent() {
    this.event.event.duration = this.quantity.toString()+" "+this.duration;
    this.event.event.date=this.event.event.date.split('-').reverse().join('-');
   if (this.isCreateEvent) {
     if(this.event.event.agencyId==0) {
       this.toastr.error("Il faut séléctionner une agence");
       return;
     }if(this.event.event.name=="") {
       this.toastr.error("le nom d'événement est obligatoire");
       return;
     }
     if(this.event.event.date==null) {
       this.toastr.error("Il fuat séléctionner une date");
       return;
     }
     if(this.event.event.time==null) {
       this.toastr.error("Il faut séléctionner le temps de l'événement");
       return;
     }
     if(this.event.event.location=="") {
       this.toastr.error("le lieu  est obligatoire");
       return;
     }
     if(this.event.event.capacity==0) {
       this.toastr.error("le nombre de place est obligatoire");
       return;
     } if(this.event.event.ticket_price==0) {
       this.toastr.error("le prix du ticket est obligatoire");
       return;
     }
     if(this.event.event.category=="") {
       this.toastr.error("le ou les catégories d'événement est obligatoire");
       return;
     }

     if(this.event.event.image == null) {
       this.toastr.error("Il faut séléctionner une image");
       return;
     }
      this.eventService.save(this.event.event).subscribe(
          (response: any) => {
            this.event.event = {
              id: 0,
              name: "",
              capacity: 0,
              ticket_price: 0,
              agencyId: 0,
              date: null,
              time: null,
              duration:"",
              location: "",
              category: "",
              currency:"",
              description: "",
              image: null,
              poster: "",
              imageToShow: null,
              agencyName: null
            };
            this.toastr.success('Votre évènement a été ajouté avec succés');
            this.router.navigate(["/events/list"]);
          },
          (err: HttpErrorResponse) => {
            console.log(err);
            // this.toastr.error('Echec', undefined, {
            //   className: 'error-toast' // Utilisation correcte de la configuration
            // } as Partial<IndividualConfig<any>>);
          },
          () => {}
      );


} else {
      this.eventService.update(this.event.event).subscribe((response: any) => {

            this.event.event = {
              id: 0,
              name: "",
              capacity: 0,
              ticket_price: 0,
              agencyId: 0,
              date: null,
              time: null,
              duration:"",
              location: "",
              category: "",
              currency:"",
              description: "",
              image: null,
              poster: "",
              imageToShow: null,
              agencyName:null
            };
            this.toastr.success("succés")
            this.router.navigate(["/events/list"]);

          },
          (err: HttpErrorResponse) => {
            console.log(err);
          },
          () => {

          })
    }

  }

  loadData() {
    this.agenceService.getAll().subscribe(
        (response: any) => {

          this.data = response;
          if(localStorage.getItem("role")==="Agence")
         {
            {this.data = this.data.filter(item =>(item.agency.agency===localStorage.getItem("login"))); }

         }

        },
        () => {
        },
        () => {
        }
    );
  }

  onActivityChanges(event: any): void {
    if (event.target.checked) {
      this.category.push(event.target.defaultValue);
    } else {
      this.category.forEach(
          (item, index) => {
            if (item === event.target.value) {
              this.category.splice(index, 1);
            }
          }
      );
    }

    this.event.event.category = this.category.toString();
  }

  resetEvent() {

    this.event.event = {
      id: 0,
      name: "",
      capacity: 0,
      ticket_price: 0,
      agencyId: 0,
      date: null,
      dateToShow: "",
      time: null,
      duration:"",
      location: "",
      category: "",
      description: "",
      currency:"",
      image: null,
      poster: "",
      imageToShow: null,
      agencyName:null
    };
  }



  validateNumberOfPlaces(event: KeyboardEvent): void {
    const key = event.key;
    if (isNaN(Number(key))) {
      event.preventDefault();
    }
  }


  plus(){
    this.i++;
    this.quantity=this.i;
    console.log(this.quantity);
  }

  minus(){
    if(this.i !=1){
      this.i--;
      this.quantity=this.i;
      console.log(this.quantity);

    }
  }
}

