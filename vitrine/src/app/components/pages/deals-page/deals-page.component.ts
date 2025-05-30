import { Component, OnInit } from '@angular/core';
import {PartnerService} from "../../../_services/partner.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AgencesService} from "../../../_services/agences.service";
import {HttpErrorResponse} from "@angular/common/http";
import {PartnerModel} from "../../../_models/partner.model";
import {EventService} from "../../../_services/event.service";

@Component({
    selector: 'app-deals-page',
    templateUrl: './deals-page.component.html',
    styleUrls: ['./deals-page.component.scss']
})
export class DealsPageComponent implements OnInit {
    agency:any;
    activity: string[] = [];
    dealsGrid: number = 1;
    data: any[] = []

    constructor(private agencesService:AgencesService,private eventService: EventService,
                private activatedRoute:ActivatedRoute,    private router: Router) { }

    ngOnInit(): void {
        this.agency = this.activatedRoute.snapshot.data['agency'];
        this.agency.imageToShow =this.loadImage(this.agency.logo);
        this.activity = this.agency.activity.split(',')
        console.log(this.agency);
        this.loadData1();



    }

    pageTitle = [
        {
            bgImage: 'assets/img/agences/bannerbanner.jpg',
            title: 'Trailblaze Expeditions'
        }
    ]
    loadImage(filename: String): Promise<String> {
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
    singleDealsBox = [
        {
            image: `assets/img/deals/deals1.jpg`,
            discount: `65% OFF`,
            trending: `Trending`,
            title: `The Start Hotel, Casino`,
            location: `Las Vegas, NAV`,
            oldPrice: `$350`,
            newPrice: `$110`,
            detailsLink: `deals-details`,
            ratingCount: `35`,
            ratingStar: [
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                }
            ]
        },
        {
            image: `assets/img/deals/deals2.jpg`,
            title: `The Music Studio`,
            location: `New York, USA`,
            newPrice: `$99`,
            detailsLink: `deals-details`,
            ratingCount: `25`,
            ratingStar: [
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bx-star`
                }
            ]
        },
        {
            image: `assets/img/deals/deals3.jpg`,
            discount: `35% OFF`,
            title: `Times Square Restaurant`,
            location: `Las Vegas, NAV`,
            oldPrice: `$100`,
            newPrice: `$85`,
            detailsLink: `deals-details`,
            ratingCount: `22`,
            ratingStar: [
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                }
            ]
        },


    ]
    loadData1() {
        this.eventService.getAll().subscribe(
            async (response: any) => {
                this.data = response;

                // Prepare an array of promises to fetch agency names asynchronously
                const agencyNamePromises = this.data.map(async (item: any) => {
                    item.imageToShow = await this.loadImage1(item.event.poster);
                    item.agencyName = await this.getAgencyName(item.agencyId);
                    return item;
                });

                // Wait for all agency names to be fetched
                const resolvedItems = await Promise.all(agencyNamePromises);

                // Filter data to include only events with matching agency name
                const filteredData = resolvedItems.filter(item => item.agencyName === this.agency.agency);

                // Update this.data with the filtered events
                this.data = filteredData;
                console.log(this.data);
            },
            (error) => {
                console.error("An error occurred while fetching events:", error);
            }
        );
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
    loadImage1(filename: String): Promise<String> {
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

}
