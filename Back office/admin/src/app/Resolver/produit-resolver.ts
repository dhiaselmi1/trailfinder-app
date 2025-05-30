import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {ProductService} from "../_services/product.service";
import {inject} from "@angular/core";
import {Observable, of} from "rxjs";
import {ProductModel} from "../_models/product.model";

export const ProduitResolver:ResolveFn<any> =
    (route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot,
     productService:ProductService = inject(ProductService)):Observable<ProductModel> => {
        const prodId = route.paramMap.get("id");
if(prodId)
    return productService.getProduct(Number(prodId));
else
{
    const prod:ProductModel = {
        id: 0,
        name: "",
        stock: 0,
        price: 0,
        status: "",
        description: "",
        image1: null,
        image: "",
        imageToShow: null,
    }
    return of(prod);
}
    }