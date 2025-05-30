import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-related-products',
    templateUrl: './related-products.component.html',
    styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    sectionTitle = [
        {
            title: `Related Products`,
            paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
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
        }
    ]

}