import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {PartnerModel} from "../../../_models/partner.model";
import {AgencesService} from "../../../_services/agences.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-stores-page',
    templateUrl: './stores-page.component.html',
    styleUrls: ['./stores-page.component.scss']
})
export class StoresPageComponent implements OnInit {
    data: any;
agency:String;
    filteredData: any[] = [];
    category: string;

    selectedCountry: string = 'Pays';

    constructor(private agenceService: AgencesService,
                private router: Router,
                private route: ActivatedRoute,) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    pageTitle = [
        {
            bgImage: `assets/img/agences/airplane.jpg`,
            title: `Toutes les agences`
        }
    ]


    loadImage(filename: String): Promise<String> {
        return new Promise((resolve, reject) => {
            this.agenceService.getImage(filename).subscribe(
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
        this.agenceService.getAll().subscribe(
            (response: any) => {
                this.data = response;
                console.log(this.data);
                // Pour chaque élément de données, appeler loadImage avec le nom du fichier logo
                this.data.forEach((item: any) => {
                    item.imageToShow = this.loadImage(item.agency.logo);
                    // Stocker l'URL de données dans une nouvelle propriété imageToShow
                });
                this.route.params.subscribe(params => {
                    this.category = params['categ'];

                    if (this.category) {
                        this.data = this.data.filter(item => item.agency.activity.toLowerCase().includes(this.category.toLowerCase()));

                    }
                });
                this.filteredData=this.data;
            },
            (err: HttpErrorResponse) => {
                console.log(err);
            },
            () => {
            }
        );
    }

    navigate(id: number) {
        this.router.navigate(['/agence', {id: id}]);
    }

    selectCountry(country: string) {
        this.selectedCountry = country;
        if(country == "Pays" )
            this.filteredData = this.data;
        else
        this.filteredData = this.data.filter(item => item.agency.country === country);
    }
    onSearchChange(searchValue: string): void {
        this.agency = searchValue;
        this.filterData();
    }
    filterData() {
        if (this.agency === "") {
            this.filteredData = this.data; // Si event est vide, restaurer les données par défaut
        } else {
            this.filteredData = this.filteredData.filter(item => item.agency.agency.toLowerCase().includes(this.agency.toLowerCase()));
        }
    }
}
