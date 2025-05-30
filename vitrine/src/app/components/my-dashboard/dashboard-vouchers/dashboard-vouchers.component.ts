import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-vouchers',
    templateUrl: './dashboard-vouchers.component.html',
    styleUrls: ['./dashboard-vouchers.component.scss']
})
export class DashboardVouchersComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: `assets/img/page-title/page-title5.jpg`,
            title: `My Dashboard`,
        }
    ]

}