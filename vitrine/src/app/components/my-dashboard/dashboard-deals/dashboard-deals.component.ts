import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-deals',
    templateUrl: './dashboard-deals.component.html',
    styleUrls: ['./dashboard-deals.component.scss']
})
export class DashboardDealsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: `assets/img/page-title/page-title2.jpg`,
            title: `My Dashboard`,
        }
    ]

}