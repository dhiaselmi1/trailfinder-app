import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Observable} from "rxjs";
import {CompanyDB} from "../../../../shared/data/tables/company";
import {AgencyModel} from "../../../../_models/agency.model";
import {TableService} from "../../../../_services/table.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {NgbdSortableHeader, SortEvent} from "../../../../shared/directives/NgbdSortableHeader";
import {HttpErrorResponse} from "@angular/common/http";
import {UserService} from "../../../../_services/user.service";
import {UserModel} from "../../../../_models/user.model";
import {AgencesService} from "../../../../_services/agences.service";

@Component({
  selector: 'ps-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
    search:String;
    public selected = [];
    showDelete: boolean = false;
    activeDiv: string = '';
    user: UserModel;
    isHovered = false;
    showChangeLogo: boolean = false;

p:number = 1;
itemPerPage:number= 5;
    public tableItem$: Observable<CompanyDB[]>;
    data: any[] = []
    filteredData: any[] = [];
    imageToShow: String | ArrayBuffer;
    file: File;
    agency:AgencyModel;

    constructor(public service: TableService,
                private toastService: ToastrService,
                private userService: UserService,
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
          this.userService.delete(this.user.id).subscribe(
              {
                next: (res) => {
                  this.toastService.success(
                      "L'utilisateur a été supprimé avec succés ",
                      "Supression",
                      {
                          closeButton: true, // Show close button
                          timeOut: 3000, // Duration before auto-dismiss
                          tapToDismiss: true, // Close toast on click
                          positionClass: 'toast-top-right',
                      }

                  );
                  console.log(res);
                    this.showDelete = false;
                    this.loadData();

                },
                error: (err: HttpErrorResponse) => {
                  console.log(err);
                    this.toastService.error("Échec de suppression");
                }
              }
          );
        }



    ngOnInit() {
        console.log("selected", this.tableItem$);

    }


    loadData() {
      this.userService.getAll().subscribe(
          (response: any) => {
            this.data = response;
            console.log(this.data);
            // Pour chaque élément de données, appeler loadImage avec le nom du fichier logo
            this.data.forEach((item:UserModel) => {
              item.imageToShow=this.loadImage(item.photo);
              // Stocker l'URL de données dans une nouvelle propriété imageToShow
            });
              this.filteredData=this.data;

          },
          (err: HttpErrorResponse) => {
            console.log(err);
        },
          () => {}
      );
    }

    update(id: number) {
      this.router.navigate(['/users/add-edit', {id: id}]);
    }

    loadImage(filename: String): Promise<String> {
      return new Promise((resolve, reject) => {
        this.userService.getImage(filename).subscribe(
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
      openDelete(user:UserModel) {
          this.user = user;
          this.showDelete = true;
      }
      closeDelete() {
          this.showDelete = false;
      }
    openChangeLogo(user:UserModel) {
        this.user = user;
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

        this.userService.updateImage(this.file, this.user.id).subscribe({
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
                (item.first_name + " " + item.last_name).toLowerCase().includes(this.search.toLowerCase()));
        }
    }
}
























