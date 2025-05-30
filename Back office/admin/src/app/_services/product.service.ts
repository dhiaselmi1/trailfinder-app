import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable} from "rxjs";
import {ProductModel} from "../_models/product.model";
import {Injectable} from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private  url = environment.host+'gestion/product';
    private headers = new HttpHeaders();
    constructor(private http: HttpClient) {
    }
    getAll() {
        return this.http.get(this.url, {});
    }

    /*
       Add new element
     */save(ressource: ProductModel) {
        const formData = new FormData();
        formData.append('image', ressource.image1);
        formData.append('name', ressource.name.toString());
        formData.append('status', ressource.status.toString());
        formData.append('price', ressource.price.toString());
        formData.append('stock', ressource.stock.toString());
        formData.append('description', ressource.description.toString());






        return this.http.post(this.url,formData,{headers: this.headers} );
    }


    /*
     update Resources
     */
    update(ressource:ProductModel) {
        return this.http.put(this.url , ressource, {headers: this.headers});
    }

    /*
      Delete Resources
     */
    delete(id:number) {
        return this.http.delete(this.url + '/' + id);
    }


    getProduct(id:number)
    {
        return this.http.get<ProductModel>(this.url + '/' + id);
    }
    getImage(fileName: String): Observable<Blob> {
        return this.http.get(this.url + '/image/' + fileName, { responseType: 'blob' });
    }



}