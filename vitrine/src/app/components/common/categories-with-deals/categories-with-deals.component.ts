import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-categories-with-deals',
    templateUrl: './categories-with-deals.component.html',
    styleUrls: ['./categories-with-deals.component.scss']
})
export class CategoriesWithDealsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleCategoriesBox = [
        {
            img: `assets/img/categories-img1.jpg`,
            title: `Best Stores`,
            number: `3,545 Stores`,
            link: `all-stores`
        },
        {
            img: `assets/img/categories-img2.jpg`,
            title: `Best Winter Deals`,
            number: `43,545 Products`,
            link: `search-page`
        }
    ]
    singleDealsBox = [
        {
            image: `assets/img/deals/deals13.jpg`,
            discount: `65% OFF`,
            trending: `Trending`,
            title: `Hand Sanitizer`,
            location: `Las Vegas, NAV`,
            oldPrice: `$350`,
            newPrice: `$110`,
            detailsLink: `deals-details`,
            ratingCount: `35`,
            ratingStar: [
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                }
            ]
        },
        {
            image: `assets/img/deals/deals14.jpg`,
            title: `Smart Shoe & Bag`,
            location: `New York, USA`,
            newPrice: `$99`,
            detailsLink: `deals-details`,
            ratingCount: `25`,
            ratingStar: [
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bx-star`
                }
            ]
        },
        {
            image: `assets/img/deals/deals15.jpg`,
            discount: `65% OFF`,
            title: `The Black Shirt`,
            location: `Las Vegas, NAV`,
            oldPrice: `$100`,
            newPrice: `$85`,
            detailsLink: `deals-details`,
            ratingCount: `22`,
            ratingStar: [
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                }
            ]
        }
    ]

}