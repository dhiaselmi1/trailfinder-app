import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {UserModel} from "../../../../_models/user.model";
import {HttpErrorResponse} from "@angular/common/http";
import {TableService} from "../../../../_services/table.service";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../../../_services/user.service";
import {Router} from "@angular/router";
import {PartnerService} from "../../../../_services/partner.service";
import {PartnerModel} from "../../../../_models/partner.model";
import {error} from "protractor";

@Component({
  selector: 'ps-list-partner',
  templateUrl: './list-partner.component.html',
  styleUrls: ['./list-partner.component.scss']
})
export class ListPartnerComponent implements OnInit{
  constructor(public service: TableService,
              private toastService: ToastrService,
              private partnerService: PartnerService,
              private router: Router,) {
  }
  @ViewChild('box') boxRef!: ElementRef;
  @ViewChild('price') priceRef!: ElementRef;

  MAX_ELEMENTS: number = 10;
  ITEM_PRICE: number = 5;
  activeCount: number = 1;
  showDelete: boolean = false;
data:any;
partner:PartnerModel;
  ngOnInit(): void {
   // this.populateBox();
    this.loadData();
  }

  populateBox(): void {
    const box: HTMLElement = this.boxRef.nativeElement;
    for (let i = 2; i < this.MAX_ELEMENTS + 2; i++) {
      const span = document.createElement("span");
      span.innerText = i.toString();
      span.classList.add("number");
      box.appendChild(span);
    }
  }

  handlePlusClick(): void {
    if (this.activeCount < this.MAX_ELEMENTS) {
      this.activeCount++;
    }
    this.updatePrice();
  }

  handleMinusClick(): void {
    if (this.activeCount > 1) {
      this.activeCount--;
    }
    this.updatePrice();
  }

  openDelete(partner:PartnerModel) {
    this.showDelete = true;
    this.partner = partner;
  }
  closeDelete() {
    this.showDelete = false;
  }

  updatePrice(): void {
    const price: HTMLElement = this.priceRef.nativeElement;
    price.innerText = `$${this.activeCount * this.ITEM_PRICE}`;
  }

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
  update(id: number) {
    this.router.navigate(['/partenaires/add-edit', {id: id}]);

  }add(id: number) {
    this.router.navigate(['/partenaires/add-image', {id: id}]);

  }
  delete()
  {this.partnerService.delete(this.partner.id).subscribe(
      ()=>{
this.closeDelete()
        this.toastService.success("Partenaire supprimé avec succès");
        setTimeout(() => {
          window.location.reload();
        }, 1000); // Delay execution to ensure the reload is completed
      },
       (err: HttpErrorResponse)=>{
         console.log(err);
         this.toastService.error("Échec de suppression");
  }

  )

  }
}