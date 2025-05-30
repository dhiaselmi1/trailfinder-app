import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-checkout-page',
    templateUrl: './checkout-page.component.html',
    styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: `assets/img/page-title/page-title2.jpg`,
            title: `Checkout`,
        }
    ]

}