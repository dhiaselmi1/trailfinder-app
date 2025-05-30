import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products-list-page',
    templateUrl: './products-list-page.component.html',
    styleUrls: ['./products-list-page.component.scss']
})
export class ProductsListPageComponent implements OnInit {

    productsList: number = 1;

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: `assets/img/page-title/page-title3.jpg`,
            title: `Products List`
        }
    ]
    singleProductsBox = [
        {
            image: `assets/img/products/products-img1.jpg`,
            title: `Note Book Mockup`,
            detailsLink: `products-details`,
            oldPrice: `$321`,
            newPrice: `$250`,
            sale: `Sale!`
        },
        {
            image: `assets/img/products/products-img2.jpg`,
            title: `Motivational Book Cover`,
            detailsLink: `products-details`,
            oldPrice: `$210`,
            newPrice: `$200`
        },
        {
            image: `assets/img/products/products-img3.jpg`,
            title: `Book Cover Softcover`,
            detailsLink: `products-details`,
            newPrice: `$150`,
            sale: `Sale!`,
            new: `New!`
        },
        {
            image: `assets/img/products/products-img4.jpg`,
            title: `Stop and Take a Second`,
            detailsLink: `products-details`,
            oldPrice: `$410`,
            newPrice: `$400`
        },
        {
            image: `assets/img/products/products-img5.jpg`,
            title: `Real Life Fairytale`,
            detailsLink: `products-details`,
            newPrice: `$240`
        },
        {
            image: `assets/img/products/products-img6.jpg`,
            title: `Book Cover Softcover`,
            detailsLink: `products-details`,
            oldPrice: `$180`,
            newPrice: `$150`
        },
        {
            image: `assets/img/products/products-img4.jpg`,
            title: `Stop and Take a Second`,
            detailsLink: `products-details`,
            oldPrice: `$410`,
            newPrice: `$400`
        },
        {
            image: `assets/img/products/products-img5.jpg`,
            title: `Real Life Fairytale`,
            detailsLink: `products-details`,
            newPrice: `$240`
        },
        {
            image: `assets/img/products/products-img6.jpg`,
            title: `Book Cover Softcover`,
            detailsLink: `products-details`,
            oldPrice: `$180`,
            newPrice: `$150`
        },
        {
            image: `assets/img/products/products-img1.jpg`,
            title: `Note Book Mockup`,
            detailsLink: `products-details`,
            oldPrice: `$321`,
            newPrice: `$250`,
            sale: `Sale!`
        },
        {
            image: `assets/img/products/products-img2.jpg`,
            title: `Motivational Book Cover`,
            detailsLink: `products-details`,
            oldPrice: `$210`,
            newPrice: `$200`
        },
        {
            image: `assets/img/products/products-img3.jpg`,
            title: `Book Cover Softcover`,
            detailsLink: `products-details`,
            newPrice: `$150`,
            sale: `Sale!`,
            new: `New!`
        }
    ]

}