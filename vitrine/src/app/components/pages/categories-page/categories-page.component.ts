import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-categories-page',
    templateUrl: './categories-page.component.html',
    styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: `assets/img/page-title/page-title1.jpg`,
            title: `All Categories`
        }
    ]
    categoriesBox = [
        {
            category: `Autos`,
            bgImage: `assets/img/categories/categories1.jpg`,
            link: `search-page`,
            categoryList: [
                {
                    name: `Auto Parts & Supplies`,
                    count: `1`
                },
                {
                    name: `Automotive Tools`,
                    count: `2`
                },
                {
                    name: `Gas`,
                    count: `3`
                },
                {
                    name: `Motor Oil`,
                    count: `4`
                },
                {
                    name: `Wheels & Tires`,
                    count: `5`
                }
            ]
        },
        {
            category: `Entertainment`,
            bgImage: `assets/img/categories/categories2.jpg`,
            link: `search-page`,
            categoryList: [
                {
                    name: `Anime`,
                    count: `1`
                },
                {
                    name: `Movies`,
                    count: `2`
                },
                {
                    name: `Music`,
                    count: `3`
                },
                {
                    name: `Streaming Services`,
                    count: `4`
                },
                {
                    name: `TV Series & TV Shows`,
                    count: `5`
                }
            ]
        },
        {
            category: `Services`,
            bgImage: `assets/img/categories/categories3.jpg`,
            link: `search-page`,
            categoryList: [
                {
                    name: `Daily Deals & Flash Sales`,
                    count: `5`
                },
                {
                    name: `Dating Services`,
                    count: `4`
                },
                {
                    name: `Delivery Services`,
                    count: `3`
                },
                {
                    name: `Memberships`,
                    count: `2`
                },
                {
                    name: `Online Services`,
                    count: `1`
                }
            ]
        },
        {
            category: `Grocery`,
            bgImage: `assets/img/categories/categories4.jpg`,
            link: `search-page`,
            categoryList: [
                {
                    name: `Baking`,
                    count: `3`
                },
                {
                    name: `Breakfast Foods`,
                    count: `2`
                },
                {
                    name: `Dairy`,
                    count: `5`
                },
                {
                    name: `Water`,
                    count: `4`
                },
                {
                    name: `Dessert`,
                    count: `1`
                }
            ]
        },
        {
            category: `Health & Beauty`,
            bgImage: `assets/img/categories/categories5.jpg`,
            link: `search-page`,
            categoryList: [
                {
                    name: `Contacts & Glasses`,
                    count: `1`
                },
                {
                    name: `Face Masks & Gloves`,
                    count: `2`
                },
                {
                    name: `Fitness & Wellness`,
                    count: `3`
                },
                {
                    name: `Hand Sanitizer`,
                    count: `4`
                },
                {
                    name: `Makeup`,
                    count: `5`
                }
            ]
        },
        {
            category: `Travel & Vacations`,
            bgImage: `assets/img/categories/categories6.jpg`,
            link: `search-page`,
            categoryList: [
                {
                    name: `Car Rentals`,
                    count: `1`
                },
                {
                    name: `Cruises`,
                    count: `2`
                },
                {
                    name: `Flights`,
                    count: `3`
                },
                {
                    name: `Hotels`,
                    count: `4`
                },
                {
                    name: `Las Vegas`,
                    count: `5`
                }
            ]
        },
        {
            category: `Video Games`,
            bgImage: `assets/img/categories/categories7.jpg`,
            link: `search-page`,
            categoryList: [
                {
                    name: `3DS`,
                    count: `5`
                },
                {
                    name: `App Games`,
                    count: `4`
                },
                {
                    name: `Computer & PC`,
                    count: `3`
                },
                {
                    name: `Nintendo Switch`,
                    count: `2`
                },
                {
                    name: `Wii & Wii U`,
                    count: `1`
                }
            ]
        },
        {
            category: `Computers`,
            bgImage: `assets/img/categories/categories8.jpg`,
            link: `search-page`,
            categoryList: [
                {
                    name: `Computer Speakers`,
                    count: `3`
                },
                {
                    name: `Keyboards`,
                    count: `2`
                },
                {
                    name: `Modems`,
                    count: `5`
                },
                {
                    name: `Wireless`,
                    count: `4`
                },
                {
                    name: `Computer Parts`,
                    count: `1`
                }
            ]
        }
    ]

}