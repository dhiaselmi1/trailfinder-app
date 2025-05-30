import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-add-coupon',
    templateUrl: './dashboard-add-coupon.component.html',
    styleUrls: ['./dashboard-add-coupon.component.scss']
})
export class DashboardAddCouponComponent implements OnInit {

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