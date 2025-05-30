import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import {NgbdSortableHeader, SortEvent} from 'src/app/shared/directives/NgbdSortableHeader';
import {CompanyDB} from '../../../../shared/data/tables/company';
import {TableService} from "../../../../_services/table.service";
import {AgencesService} from "../../../../_services/agences.service";
import {ToastrService} from "ngx-toastr";
import {AgencyModel} from "../../../../_models/agency.model";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {EventService} from "../../../../_services/event.service";


@Component({
    selector: 'ps-list-agences',
    templateUrl: './list-agences.component.html',
    styleUrls: ['./list-agences.component.scss']
})
export class ListAgencesComponent implements OnInit {
    showDelete: boolean = false;
    showApprove: boolean = false;
    showDisapprove: boolean = false;
    showChangeLogo: boolean = false;
    isTable: boolean = false;
    isHovered = false;
    activeDiv: string = '';
    p:number = 1;
    itemPerPage:number= 4;
    search:String;

    public selected = [];

    public tableItem$: Observable<CompanyDB[]>;
    data: any[] = []
    filteredData: any[] = []
    imageToShow: String | ArrayBuffer;
    file: File;
    agency:any;
    items: any[] = [];
    constructor(public service: TableService,
                private toastService: ToastrService,
                private agenceService: AgencesService,
                private eventService: EventService,
                private router: Router,
    ) {
        this.loadData();
    }

    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;



    changeActiveDiv(divName: string) {
        this.activeDiv = divName;
    }

    toggleHover() {
        this.isHovered = !this.isHovered;
    }

    public delete() {
        this.agenceService.delete(this.agency.id).subscribe({
            next: (res) => {

                const toastRef = this.toastService.success(
                    "L'agence a été supprimée avec succès",
                    "Suppression",
                    {
                        closeButton: true, // Show close button
                        timeOut: 3000, // Duration before auto-dismiss
                        tapToDismiss: true, // Close toast on click
                        positionClass: 'toast-top-right',
                    }
                );
                this.showDelete = false;
                this.showDisapprove = false;

                // Get the toast element and modify its style
                const toastElement = document.querySelector('.toast-success'); // Assuming the class of the success toast is 'toast-success'
                if (toastElement) {
                    (toastElement as HTMLElement).style.backgroundColor = '#ff0000'; // Change to the desired color
                }

                console.log(res);
                this.loadData();
            },
            error: (err: HttpErrorResponse) => {
                console.log(err);
                this.toastService.error("Échec de suppression de l'agence"); // Display dynamic error message
            }
        });
    }

    ngOnInit() {
        console.log("selected", this.tableItem$);

    }



    loadData() {
        this.agenceService.getAll().subscribe(
            (response: any) => {
                console.log(response);
                this.data = response;
                this.data.forEach((item: any) => {

                    item.imageToShow = this.loadImage(item.agency.logo);

                        item.event = this.loadPoster(item.poster);


                });
                this.filteredData=this.data;
                console.log(this.filteredData);

            },
            () => {
            },
            () => {
            }
        );
    }

    openDelete(agency:any) {
        this.agency = agency.agency;
        this.showDelete = true;
    }

    openApprove(agency:AgencyModel) {
        this.showApprove = true;
        this.agency = agency.agency;
    }

    openDisapprove(agency:any) {
        this.agency = agency.agency;
        this.showDisapprove = true;
    }

    closeDelete() {
        this.showDelete = false;
    }

    closeApprove() {
        this.showApprove = false;
    }

    closeDisapprove() {
        this.showDisapprove = false;
    }



    toggleDropdown(agency:any) {
        agency.agency.isDropdownOpen = !agency.agency.isDropdownOpen;
    }

    openChangeLogo(agency:AgencyModel) {
        this.agency = agency.agency;
        this.showChangeLogo = true;
    }


    closeChangeLogo() {
        this.showChangeLogo = false;
        this.file = undefined
    }

    public approve() {

        this.agenceService.approve(this.agency.id).subscribe({
            next: (res) => {
                const toastRef = this.toastService.success(
                    "L'agence a été approuvée avec succès",
                    "Approbation",
                    {
                        closeButton: true,
                        timeOut: 3000,
                        tapToDismiss: true,
                        positionClass: 'toast-top-right',
                    }
                );
                this.showDelete = false;
                this.showDisapprove = false;

                // Get the toast element and modify its style
                const toastElement = document.querySelector('.toast-success');
                if (toastElement) {
                    (toastElement as HTMLElement).style.backgroundColor = '#ff0000';
                }

                console.log(res);
                this.loadData();
            },
            error: (err: HttpErrorResponse) => {
                console.log(err);
                this.toastService.error("Échec d'approbation de l'agence"); // Display dynamic error message
            }
        });
        this.showApprove = false;
    }


    update(id: number) {
        this.router.navigate(['/agencies/add-edit', {id: id}]);
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
    loadPoster(filename: String): Promise<String> {
        return new Promise((resolve, reject) => {
            this.eventService.getImage(filename).subscribe(
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

    addEvent(id: number) {
        this.router.navigate(['/events/add-edit', {id2: id}]);
    }

    showCard() {
        this.isTable = false;
    }

    showTable() {
        this.isTable = true;

    }

    getFile(event: any) {
        this.file = event.target.files[0];
    }

    changeLogo() {
        console.log(this.agency.agency);
        console.log(this.file);
        this.agenceService.updateImage(this.file, this.agency.id).subscribe({
            next: (res) => {
                this.closeChangeLogo();
                this.toastService.success(
                    "Le logo a été modifié avec succés",
                    "Modification logo",
                );
                window.location.reload();

            },
            error: (err: HttpErrorResponse) => {
                console.log(err);
                this.toastService.error("Échec de changement du logo");
            }
        });
    }
    onSearchChange(searchValue: string): void {
        this.search = searchValue;
        this.filterData();
    }
    filterData() {
        this.filteredData = this.data; // Si event est vide, restaurer les données par défaut
        if (this.search != "") {
            this.filteredData = this.filteredData.filter(item =>
                (item.agency.agency).toLowerCase().includes(this.search.toLowerCase()));
        }
    }
}