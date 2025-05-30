import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-coupons',
    templateUrl: './dashboard-coupons.component.html',
    styleUrls: ['./dashboard-coupons.component.scss']
})
export class DashboardCouponsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: `assets/img/page-title/page-title1.jpg`,
            title: `My Dashboard`,
        }
    ]

}