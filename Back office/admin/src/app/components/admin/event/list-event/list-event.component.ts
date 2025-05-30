import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {TableService} from "../../../../_services/table.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {EventService} from "../../../../_services/event.service";
import {EventModel} from "../../../../_models/event.model";
import {AgencesService} from "../../../../_services/agences.service";
import {AgencyModel} from "../../../../_models/agency.model";
import {UserModel} from "../../../../_models/user.model";
import {windowWhen} from "rxjs";

@Component({
  selector: 'ps-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})
export class ListEventComponent {
    showDelete: boolean = false;
    activeDiv: string = '';
    isHovered = false;
    showChangeLogo: boolean = false;
    file: File;
    search: String;
    public selected = [];
    p: number = 1;
    itemPerPage: number = 5;
    data: any[] = []
    filteredData: any[] = []
    imageToShow: String | ArrayBuffer
    event: any;

    constructor(public service: TableService,
                private toastService: ToastrService,
                private eventService: EventService,
                private agencesService: AgencesService,
                private router: Router
    ) {


        this.loadData();


    }

    public delete() {
        this.eventService.delete(this.event.event.id).subscribe({
            next: (res) => {
                window.location.reload();
                const toastRef =
                    this.toastService.success(
                        "L'évènement a été supprimée avec succès",
                        "Suppression",
                        {
                            closeButton: true, // Show close button
                            timeOut: 3000, // Duration before auto-dismiss
                            tapToDismiss: true, // Close toast on click
                            positionClass: 'toast-top-right',
                        }
                    );
                this.showDelete = false;

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
            }
        });
    }

    changeActiveDiv(divName: string) {
        this.activeDiv = divName;
    }

    toggleHover() {
        this.isHovered = !this.isHovered;
    }

    loadData() {
        this.eventService.getAll().subscribe(
            async (response: any) => { // Ajoutez 'async' ici
                this.data = response;

                // Pour chaque élément de données, appeler loadImage avec le nom du fichier logo
                for (let item of this.data) { // Utilisez une boucle 'for...of' au lieu de 'forEach'
                    item.imageToShow = this.loadImage(item.event.poster);
                    item.agencyName = await this.getAgencyName(item.agencyId); // Utilisez 'await' ici
                    console.log(item.agencyName);

                    // Stocker l'URL de données dans une nouvelle propriété imageToShow
                }
                console.log(localStorage.getItem("login"));
                if(localStorage.getItem("role")==="Agence")
                {this.data = this.data.filter(item =>(item.agencyName===localStorage.getItem("login"))); }
                this.filteredData = this.data;
            },
            () => {
            },
            () => {
            }
        );
    }


    openDelete(event: EventModel) {
        this.event = event;
        this.showDelete = true;
    }


    closeDelete() {
        this.showDelete = false;
    }

    update(id: number) {
        console.log(id);
        this.router.navigate(['/events/add-edit', {id: id}]);
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
            return agency.agency;
        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération du nom de l'agence :", error);
            return null;
        }
    }



    openChangeLogo(event:any) {
        this.event = event;
        this.showChangeLogo = true;
    }

    closeChangeLogo() {
        this.showChangeLogo = false;
        this.file = undefined
    }

    getFile(event: any) {
        this.file = event.target.files[0];
    }

    changeLogo() {

        this.eventService.updateImage(this.file, this.event.id).subscribe({
            next: (res) => {
                this.closeChangeLogo();
                this.toastService.success(
                    "La  photo a été modifié avec succés",
                    "Modification photo",
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
                (item.event.name).toLowerCase().includes(this.search.toLowerCase()));
        }
    }
}
