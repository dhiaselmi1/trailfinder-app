import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bannerWrapperContent = [
        {
            title: `Find Deals, Discounts, Stores & Coupns`,
            paragraph: `Get rewarded for everything you buy.........`
        }
    ]
    bannerWrapperImage = [
        {
            img: `assets/img/banner-img.png`
        }
    ]

}