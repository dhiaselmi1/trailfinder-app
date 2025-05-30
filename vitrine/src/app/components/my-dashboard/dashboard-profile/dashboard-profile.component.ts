import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard-profile',
	templateUrl: './dashboard-profile.component.html',
	styleUrls: ['./dashboard-profile.component.scss']
})
export class DashboardProfileComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

    pageTitle = [
        {
            bgImage: `assets/img/page-title/page-title3.jpg`,
            title: `My Dashboard`,
        }
    ]

}