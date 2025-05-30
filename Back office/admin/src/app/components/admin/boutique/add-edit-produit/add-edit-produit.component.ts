import {Component, OnInit} from '@angular/core';
import {AgencesService} from "../../../../_services/agences.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductModel} from "../../../../_models/product.model";
import {ProductService} from "../../../../_services/product.service";

@Component({
  selector: 'ps-add-edit-produit',
  templateUrl: './add-edit-produit.component.html',
  styleUrls: ['./add-edit-produit.component.scss']
})
export class AddEditProduitComponent implements OnInit{
  activity: string[] = [];
product:any
    isCreateProd = true;  file:File;
  constructor(private productService:ProductService,private toastr:ToastrService,
              private activatedRoute:ActivatedRoute,private router: Router
  ) {
  }

  ngOnInit(): void {
      this.product = this.activatedRoute.snapshot.data['product'];
if(this.product && this.product.id>0)
{ this.isCreateProd = false;
}
else
    {
        this.isCreateProd = true;
    }

  }


  getFile(event:any){
    this.file= event.target.files[0];
    this.product.image1 = this.file;
  }

  saveProduct() {
      if(this.isCreateProd) {
          this.productService.save(this.product).subscribe(
              (response: any) => {
                  this.product = {
                      id: 0,
                      name: "",
                      stock: 0,
                      price: 0,
                      status: "",
                      description: "",
                      image1: null,
                      image: "",
                      imageToShow: null,
                  };
                  this.toastr.success('Votre produit a été ajouté avec succés');
                  this.router.navigate(["/boutique/list"]);
              },
              (err: HttpErrorResponse) => {
                  console.log(err);

              },
              () => {
              }
          );
      }
      else
      {  this.productService.update(this.product).subscribe(
          (response: any) => {
              this.product = {
                  id: 0,
                  name: "",
                  stock: 0,
                  price: 0,
                  status: "",
                  description: "",
                  image1: null,
                  image: "",
                  imageToShow: null,
              };
              this.toastr.success('Votre produit a été modifié avec succés');
              this.router.navigate(["/boutique/list"]);
          },
          (err: HttpErrorResponse) => {
              console.log(err);

          },
          () => {
          }
      );

      }

    }






}