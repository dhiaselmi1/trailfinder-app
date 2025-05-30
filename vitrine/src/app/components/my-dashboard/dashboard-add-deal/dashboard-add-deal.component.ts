import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-add-deal',
    templateUrl: './dashboard-add-deal.component.html',
    styleUrls: ['./dashboard-add-deal.component.scss']
})
export class DashboardAddDealComponent implements OnInit {

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