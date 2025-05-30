import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {PartnerModel} from "../../../_models/partner.model";
import {PartnerService} from "../../../_services/partner.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-partner-style-one',
    templateUrl: './partner-style-one.component.html',
    styleUrls: ['./partner-style-one.component.scss']
})
export class PartnerStyleOneComponent implements OnInit {
    data:any;

    constructor( private partnerService: PartnerService,
                private router: Router,) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    sectionTitle = [
        {
            title: `Nos partenaires `,
            paragraph: `Nous exprimons notre gratitude envers nos partenaires pour leur contribution et les services de qualité qu'ils nous ont offerts. Leur dévouement et leur professionnalisme ont été essentiels à notre succès. `
        }
    ]

    partnerItem = [
        {
            img: `assets/img/partner/tourisme.png`
        },
        {
            img: `assets/img/partner/decathlon-logo.png`
        },
        {
            img: `assets/img/partner/pristine.png`
        },
        {
            img: `assets/img/partner/tunisair.png`
        },
        {
            img: `assets/img/partner/thedreamer.jpg`
        },
        {
            img: `assets/img/partner/magic.png`
        }
    ]
    loadImage(filename: String): Promise<String> {
        return new Promise((resolve, reject) => {
            this.partnerService.getImage(filename).subscribe(
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
    loadData() {
        this.partnerService.getAll().subscribe(
            (response: any) => {
                this.data = response;
                console.log(this.data);
                // Pour chaque élément de données, appeler loadImage avec le nom du fichier logo
                this.data.forEach((item:PartnerModel) => {
                    item.imageToShow=this.loadImage(item.logo);
                    // Stocker l'URL de données dans une nouvelle propriété imageToShow
                });
            },
            (err: HttpErrorResponse) => {
                console.log(err);
            },
            () => {}
        );
    }

    navigate(id:number) {
        this.router.navigate(['/partenaire', {id: id}]);
    }
}
