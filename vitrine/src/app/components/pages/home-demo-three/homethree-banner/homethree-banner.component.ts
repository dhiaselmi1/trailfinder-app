import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-banner',
    templateUrl: './homethree-banner.component.html',
    styleUrls: ['./homethree-banner.component.scss']
})
export class HomethreeBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bannerContent = [
        {
            title: `Find Deals, Discounts, Stores & Coupns`,
            paragraph: `Get rewarded for everything you buy.........`
        }
    ]

}