import { Component, OnInit } from '@angular/core';
import {EventService} from "../../../_services/event.service";
import {AgencesService} from "../../../_services/agences.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-stores-details-page',
    templateUrl: './stores-details-page.component.html',
    styleUrls: ['./stores-details-page.component.scss']
})
export class StoresDetailsPageComponent implements OnInit {
    selectedOption = 'Default';
    dealsGrid: number = 1;
    data: any[] = []
    data1: any[] = []
    category: string;
    location: string;
event:String;
    constructor(private eventService: EventService,
                private agencesService: AgencesService,
                private router: Router,private route: ActivatedRoute,
    ) {
    }


    ngOnInit(): void {
this.loadData();

    }

    pageTitle = [
        {
            bgImage: `assets/img/agences/photos-evenements/tunisia-2442370_1280.jpg`,
            title: `Tous les événements`
        }
    ]

    loadData() {
        this.eventService.getAll().subscribe(
            (response: any) => {
this.data=response;
                // Pour chaque élément de données, appeler loadImage avec le nom du fichier logo
                this.data.forEach((item: any) => {
                    item.imageToShow = this.loadImage(item.event.poster);
                    item.event.date=item.event.date.split('-').reverse().join('-');
                    item.agencyName = this.getAgencyName(item.agencyId);

                    // Stocker l'URL de données dans une nouvelle propriété imageToShow
                });
                this.data1=this.data;
                this.route.params.subscribe(params => {
                    this.category = params['categ'];
                    this.location = params['lieux'];

                    if (this.category) {
                        this.data = this.data.filter(item => item.event.category.toLowerCase().includes(this.category.toLowerCase()));

                    } else if (this.location) {
                        this.data = this.data.filter(item => item.event.location.toLowerCase().includes(this.location.toLowerCase()));

                    } else {

                    }
                });
console.log(this.data);
        },
            () => {
            },
            () => {
            }
        );
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

    async getAgencyName(id: number): Promise<String> {
        try {
            const agency = await this.agencesService.getAgence(id).toPromise();

            return agency.agency; // Supposant que le nom de l'agence est stocké dans la propriété 'nom' de l'objet 'AgencyModel'
        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération du nom de l'agence :", error);
            return null; // Ou une valeur par défaut en cas d'erreur
        }
    }
    navigate(id:number) {
        this.router.navigate(['/evenement', {id: id}]);
    }
    sortData() {
        switch (this.selectedOption) {
            case 'Prix: low to high':
                this.data.sort((a, b) => a.event.ticket_price - b.event.ticket_price);
                break;
            case 'Prix: high to low':

                this.data.sort((a, b) => b.event.ticket_price - a.event.ticket_price);

                break;
            case 'Default':
                this.loadData();

                break;

        }
    }
    onSearchChange(searchValue: string): void {
        this.event = searchValue;
        this.filterData();
    }


    filterData() {
        if (this.event === "") {
            this.data = this.data1; // Si event est vide, restaurer les données par défaut
        } else {
            this.data = this.data.filter(item => item.event.name.toLowerCase().includes(this.event.toLowerCase()));
        }
    }
}
