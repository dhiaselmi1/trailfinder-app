import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {QuickViewComponent} from "../quick-view/quick-view.component";
import { PRODUCT } from '../../../../shared/data/tables/product-list';
import {UserModel} from "../../../../_models/user.model";
import {Observable} from "rxjs";
import {CompanyDB} from "../../../../shared/data/tables/company";
import {AgencyModel} from "../../../../_models/agency.model";
import {TableService} from "../../../../_services/table.service";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../../../_services/user.service";
import {Router} from "@angular/router";
import {NgbdSortableHeader} from "../../../../shared/directives/NgbdSortableHeader";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductService} from "../../../../_services/product.service";
import {ProductModel} from "../../../../_models/product.model";
@Component({
  selector: 'ps-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent implements OnInit{
  search:String;
  public selected = [];
  showDelete: boolean = false;
  product: ProductModel;
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
              private productService: ProductService,
              private router: Router,
  ) {
    this.loadData();
  }


  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;




  public delete() {
    this.productService.delete(this.product.id).subscribe(
        {
          next: (res) => {
            this.toastService.success(
                "Le produit a été supprimé avec succés ",
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
    this.productService.getAll().subscribe(
        (response: any) => {
          this.data = response;
          console.log(this.data);
          // Pour chaque élément de données, appeler loadImage avec le nom du fichier logo
          this.data.forEach((item:ProductModel) => {
            item.imageToShow=this.loadImage(item.image);
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
    this.router.navigate(['/boutique/add-edit', {id: id}]);
  }

  loadImage(filename: String): Promise<String> {
    return new Promise((resolve, reject) => {
      this.productService.getImage(filename).subscribe(
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
  openDelete(prod:ProductModel) {
    this.product = prod;
    this.showDelete = true;
  }
  closeDelete() {
    this.showDelete = false;
  }
  getFile(event: any) {
    this.file = event.target.files[0];
  }

  onSearchChange(searchValue: string): void {
    this.search = searchValue;
    this.filterData();
  }
  filterData() {
    this.filteredData = this.data; // Si event est vide, restaurer les données par défaut
    if (this.search != "") {
      this.filteredData = this.filteredData.filter(item =>
          (item.name).toLowerCase().includes(this.search.toLowerCase()));
    }
  }
}
