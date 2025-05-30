import { Component, OnInit } from '@angular/core';
import {AgencesService} from "../../../_services/agences.service";
import {Router} from "@angular/router";
import {AgencyModel} from "../../../_models/agency.model";
import {HttpErrorResponse} from "@angular/common/http";

class ToastrService {
}

@Component({
    selector: 'agence',
    templateUrl: './popular-store.component.html',
    styleUrls: ['./popular-store.component.scss']
})
export class PopularStoreComponent implements OnInit {
    data: any[] = []
    constructor(
                private agenceService: AgencesService,
                private router: Router,
    ) {
       this.loadData();
    }

    ngOnInit(): void {
    }

    popularStoreContent = [
        {
            image: `assets/img/agences/popular-store-b.jpg`,
            title: `Agences`,
            paragraph: `Avec notre présence mondiale croissante, nous nous engageons à rendre nos services disponibles à tous.`,
            buttonText: `Découvrir les agences`,
            buttonLink: `all-agences`
        }
    ]

    loadData() {
        this.agenceService.getAll().subscribe(
            (response: any) => {
                console.log(response);
                this.data = response.slice(-9);
                this.data.forEach((item: any) => {

                    item.imageToShow = this.loadImage(item.agency.logo);
                });
            },
            () => {
            },
            () => {
            }
        );
    }
    loadImage(filename: String): Promise<String> {
        return new Promise((resolve, reject) => {
            this.agenceService.getImage(filename).subscribe(
                (response: Blob) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const imageDataUrl = reader.result as String;
                        resolve(imageDataUrl);
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
}
