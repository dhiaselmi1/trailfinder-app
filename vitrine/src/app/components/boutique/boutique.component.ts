import {Component, OnInit, ViewChild} from '@angular/core';
import {QuickViewComponent} from "./quick-view/quick-view.component";
import {Product, PRODUCT} from "./product-list";
import {CartService} from "../../_services/cart.service";
import {ProductModel} from "../../_models/product.model";
import {HttpErrorResponse} from "@angular/common/http";
import {AgencyModel} from "../../_models/agency.model";
import {Router} from "@angular/router";
import {ProductService} from "../../_services/product.service";

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent implements OnInit{
    public openSidebar: boolean = false;
    public listView: boolean = false;
    public col: string = '4';
    public products = PRODUCT;
product:any
    public cols: string= '4';
    public sidebarResOpen : boolean = false;
    search:String;
    public selected = [];
    showDelete: boolean = false;

    p:number = 1;
    itemPerPage:number= 5;
    data: any[] = []
    filteredData: any[] = [];
    imageToShow: String | ArrayBuffer;
    file: File;
    agency:AgencyModel;

    @ViewChild("quickView") QuickView: QuickViewComponent;

    constructor(private cartService : CartService,
                private productService: ProductService,
                private router: Router,) {

    }

    ngOnInit() {
        this.product={
            id:0,
            description:"heyel yesser",
            name:"manchfa",
            status:"onStock",
            price:50,
            stock:30,
            type:"article"
        }
        Object.assign(this.product, {quantity: 1, total: this.product.price});
        this.loadData();
    }

    sidebarToggle() {
        console.log("open");
        this.openSidebar = !this.openSidebar;
        this.col = '3';
        this.cols = '4';
    }



    gridColumn(val) {
        this.col = val;
        this.cols = val;
    }

    add(item:any) {
        this.cartService.addtoCart(item);
    }
    loadData() {
        this.productService.getAll().subscribe(
            (response: any) => {
                this.data = response;
                console.log(this.data);
                // Pour chaque élément de données, appeler loadImage avec le nom du fichier logo
                this.data.forEach((item:ProductModel) => {
                    item.imageToShow=this.loadImage(item.image);
                    Object.assign(item, {quantity: 1, total: item.price,type:"article"});
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
}
