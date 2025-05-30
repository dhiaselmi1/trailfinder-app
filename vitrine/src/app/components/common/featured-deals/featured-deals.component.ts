import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {AgencesService} from "../../../_services/agences.service";
import {Router} from "@angular/router";
import {EventService} from "../../../_services/event.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'events',
    templateUrl: './featured-deals.component.html',
    styleUrls: ['./featured-deals.component.scss']
})
export class FeaturedDealsComponent implements OnInit {
    data: any[] = []

    constructor(private eventService: EventService,
                private agencesService: AgencesService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    sectionTitle = [
        {
            title: `Evénements récents`,
            paragraph: `Chaque moment promet une expérience mémorable et enrichissante pour tous.`
        }
    ]
    dealsSlides: OwlOptions = {
        nav: true,
        margin: 30,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    }

    loadData() {
        this.eventService.getProche().subscribe(
            (response: any) => {
                console.log(response);
                this.data = response
                // Pour chaque élément de données, appeler loadImage avec le nom du fichier logo
                this.data.forEach((item: any) => {
                    item.imageToShow = this.loadImage(item.event.poster);
                    item.event.date=item.event.date.split('-').reverse().join('-');
                    item.agencyName = this.getAgencyName(item.agencyId);

                    // Stocker l'URL de données dans une nouvelle propriété imageToShow
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
}
