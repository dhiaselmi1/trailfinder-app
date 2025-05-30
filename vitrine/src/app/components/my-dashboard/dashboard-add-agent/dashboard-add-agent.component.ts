import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-add-agent',
    templateUrl: './dashboard-add-agent.component.html',
    styleUrls: ['./dashboard-add-agent.component.scss']
})
export class DashboardAddAgentComponent implements OnInit {

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