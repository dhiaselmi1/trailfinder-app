import { Component, OnInit } from '@angular/core';
import {PartnerModel} from "../../../_models/partner.model";
import {PartnerService} from "../../../_services/partner.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";

@Component({
    selector: 'app-blog-details-page',
    templateUrl: './blog-details-page.component.html',
    styleUrls: ['./blog-details-page.component.scss']
})
export class BlogDetailsPageComponent implements OnInit {
partner:any;
data:any;
images:any[]=[];
    constructor(private partnerService:PartnerService,
                private activatedRoute:ActivatedRoute,    private router: Router) { }

    ngOnInit(): void {
        this.partner = this.activatedRoute.snapshot.data['partner'];

        this.partner.imageToShow =this.loadImage(this.partner.logo);
        this.images=[];
this.images.push(this.loadImage(this.partner.images[0].image));
this.images.push(this.loadImage(this.partner.images[1].image));
this.images.push(this.loadImage(this.partner.images[2].image));
console.log(this.images);
        this.loadData();
    }

    pageTitle = [
        {
            bgImage: `assets/img/evenements/output_image.jpeg`,
            title: `Ministère du tourisme`,
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
        this.partner = this.data.find(item => item.id === id);
        this.images=[];
        this.images.push(this.loadImage(this.partner.images[0].image));
        this.images.push(this.loadImage(this.partner.images[1].image));
        this.images.push(this.loadImage(this.partner.images[2].image));
    }

}
