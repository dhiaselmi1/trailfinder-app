import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-popular-deals',
    templateUrl: './popular-deals.component.html',
    styleUrls: ['./popular-deals.component.scss']
})
export class PopularDealsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: `Popular Deals`,
            paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
        }
    ]
    singleDealsBox = [
        {
            image: `assets/img/deals/deals9.jpg`,
            discount: `65% OFF`,
            trending: `Trending`,
            title: `The Perfect Fit`,
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
            image: `assets/img/deals/deals10.jpg`,
            title: `Bally Total Fitness`,
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
            image: `assets/img/deals/deals11.jpg`,
            discount: `35% OFF`,
            title: `Co-Working Place`,
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
        },
        {
            image: `assets/img/deals/deals12.jpg`,
            discount: `65% OFF`,
            trending: `Trending`,
            title: `Beauty and Spa`,
            location: `Las Vegas, Nevada`,
            oldPrice: `$110`,
            newPrice: `$75`,
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
            image: `assets/img/deals/deals1.jpg`,
            discount: `65% OFF`,
            trending: `Trending`,
            title: `The Start Hotel, Casino`,
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
            },
            1200: {
                items: 4
            }
        }
    }

}