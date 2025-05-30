import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-deals-with-tabs',
    templateUrl: './deals-with-tabs.component.html',
    styleUrls: ['./deals-with-tabs.component.scss']
})
export class DealsWithTabsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    dealsTabs = [
        {
            tabTitle: `My Deals`,
            singleDealsBox: [
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
                },
                {
                    image: `assets/img/deals/deals2.jpg`,
                    title: `The Music Studio`,
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
                    image: `assets/img/deals/deals3.jpg`,
                    discount: `35% OFF`,
                    title: `Times Square Restaurant`,
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
                    image: `assets/img/deals/deals4.jpg`,
                    discount: `65% OFF`,
                    trending: `Trending`,
                    title: `Las Vegas Strip`,
                    location: `Las Vegas, NAV`,
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
                            icon: `bx bxs-star-half`
                        },
                        {
                            icon: `bx bx-star`
                        }
                    ]
                }
            ]
        },
        {
            tabTitle: `Popular`,
            singleDealsBox: [
                {
                    image: `assets/img/deals/deals3.jpg`,
                    discount: `35% OFF`,
                    title: `Times Square Restaurant`,
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
                    image: `assets/img/deals/deals4.jpg`,
                    discount: `65% OFF`,
                    trending: `Trending`,
                    title: `Las Vegas Strip`,
                    location: `Las Vegas, NAV`,
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
                            icon: `bx bxs-star-half`
                        },
                        {
                            icon: `bx bx-star`
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
                },
                {
                    image: `assets/img/deals/deals2.jpg`,
                    title: `The Music Studio`,
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
                }
            ]
        },
        {
            tabTitle: `Newest`,
            singleDealsBox: [
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
                },
                {
                    image: `assets/img/deals/deals2.jpg`,
                    title: `The Music Studio`,
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
                    image: `assets/img/deals/deals3.jpg`,
                    discount: `35% OFF`,
                    title: `Times Square Restaurant`,
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
                    image: `assets/img/deals/deals4.jpg`,
                    discount: `65% OFF`,
                    trending: `Trending`,
                    title: `Las Vegas Strip`,
                    location: `Las Vegas, NAV`,
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
                            icon: `bx bxs-star-half`
                        },
                        {
                            icon: `bx bx-star`
                        }
                    ]
                }
            ]
        },
        {
            tabTitle: `Exclusives`,
            singleDealsBox: [
                {
                    image: `assets/img/deals/deals3.jpg`,
                    discount: `35% OFF`,
                    title: `Times Square Restaurant`,
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
                    image: `assets/img/deals/deals4.jpg`,
                    discount: `65% OFF`,
                    trending: `Trending`,
                    title: `Las Vegas Strip`,
                    location: `Las Vegas, NAV`,
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
                            icon: `bx bxs-star-half`
                        },
                        {
                            icon: `bx bx-star`
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
                },
                {
                    image: `assets/img/deals/deals2.jpg`,
                    title: `The Music Studio`,
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
                }
            ]
        }
    ]

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}