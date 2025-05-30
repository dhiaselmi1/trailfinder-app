import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-store',
    templateUrl: './dashboard-store.component.html',
    styleUrls: ['./dashboard-store.component.scss']
})
export class DashboardStoreComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: `assets/img/page-title/page-title4.jpg`,
            title: `My Dashboard`,
        }
    ]

}