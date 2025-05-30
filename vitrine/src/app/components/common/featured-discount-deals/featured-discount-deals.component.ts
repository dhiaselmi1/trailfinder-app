import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-featured-discount-deals',
    templateUrl: './featured-discount-deals.component.html',
    styleUrls: ['./featured-discount-deals.component.scss']
})
export class FeaturedDiscountDealsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: `Featured Discount`,
            paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
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
            discount: `35% OFF`,
            title: `The Black Shrit`,
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
                    icon: `bx bx-star`
                },
                {
                    icon: `bx bx-star`
                }
            ]
        },
        {
            image: `assets/img/deals/deals5.jpg`,
            trending: `Trending`,
            title: `Universal Studios`,
            location: `Orlando, Florida`,
            newPrice: `$50`,
            detailsLink: `deals-details`,
            ratingCount: `18`,
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
    dealsSlides: OwlOptions = {
        nav: true,
        margin: 30,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    }

}