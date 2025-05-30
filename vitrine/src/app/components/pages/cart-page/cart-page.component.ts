import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../_services/cart.service";
import {HttpErrorResponse} from "@angular/common/http";
import {PaymentModel} from "../../../_models/payment.model";
import {PaymentService} from "../../../_services/payment.service";
import {Router} from "@angular/router";
import {ReservationModel} from "../../../_models/reservation.model";
import {ReservationService} from "../../../_services/reservation.service";
import {Parser} from "@angular/compiler";
import {PurchaseService} from "../../../_services/purchase.service";


@Component({
    selector: 'app-cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
    quantity:number=1;
    i=1;
    payment:PaymentModel;
    reservations:ReservationModel[]=[];
    reservation:ReservationModel;
    purchases:any[]=[];
    id:String="";
    public products : any = [];
    public grandTotal !: number;
    constructor(private cartService : CartService,
                private  paymentService:PaymentService
                ,private router:Router,
                private purchaseService:PurchaseService,
    ) { }




    ngOnInit(): void {
        this.cartService.getProducts()
            .subscribe(res=>{
                this.products = res;
                console.log(this.products);
                this.grandTotal = this.cartService.getTotalPrice();
            })
        this.products.forEach((item:any) => {
            item.ticket_price=item.total

        })
        this.payment = {
            amount:"",
            description:"",
            method:""
        }
        this.reservation = {
            event_id:0,
            user_id:0,
            tickets_number:0
        };
    }

    pageTitle = [
        {
            bgImage: `assets/img/products/cart.jpg`,
            title: `Votre panier`,
        }
    ]
    plus(item:any){

        item.quantity++;
        item.total=item.quantity*item.ticket_price;
        item.total =  item.total.toFixed(1);
        this.grandTotal = this.cartService.getTotalPrice();
    }

    minus(item:any){
        if(item.quantity !=1){
            item.quantity--;

item.total=item.quantity*item.ticket_price;
            item.total =  item.total.toFixed(1);
            this.grandTotal = this.cartService.getTotalPrice();

        }
    }
    removeItem(item: any){
        this.cartService.removeCartItem(item);
    }
    emptycart(){
        this.cartService.removeAllCart();
    }
    pay() {

this.id=localStorage.getItem("id");
if(this.id) {
    this.payment.amount = this.grandTotal.toString();
    this.payment.description = "Achat de SummitSells"
    this.products.forEach((item:any) => {
        if (item.type == "event") {
            let newReservation = {
                user_id: Number(this.id),
                event_id: item.id,
                tickets_number: item.quantity
            };
            console.log(item.id);
            this.reservations.push(newReservation);
        }
        else
        {let purchase = {
            quantity: Number(item.quantity),
           user_id: Number(this.id),
     product_id:Number(item.id),
          amount:Number(item.total)
        };
            this.purchases.push(purchase);
        }

    })

    localStorage.setItem("reservation",JSON.stringify(this.reservations));


     this.paymentService.pay(this.payment).subscribe(
          (approvalUrl: string) => {
              this.purchaseService.save(this.purchases).subscribe( ()=>{

                  },
                  (err: HttpErrorResponse) => {
                      console.log(err);
                  }
              );
  window.location.href = approvalUrl;

          },
          (err: HttpErrorResponse) => {
              console.log(err);
          }
      );

}
else
{
    this.router.navigate(["/profile-authentication"])
}
    }
    goToPage() {
        this.router.navigate([""])
    }

}
