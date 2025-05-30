import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products-details-page',
    templateUrl: './products-details-page.component.html',
    styleUrls: ['./products-details-page.component.scss']
})
export class ProductsDetailsPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    pageTitle = [
        {
            bgImage: `assets/img/page-title/page-title2.jpg`,
            title: `Products Details`
        }
    ]

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}