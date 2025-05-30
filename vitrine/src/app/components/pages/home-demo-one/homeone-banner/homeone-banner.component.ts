import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {Router} from "@angular/router";

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

    constructor( private router:Router) { }

    ngOnInit(): void {
    }

    mainBannerContent = [
        {
            title: `Catégories d'événements`,
            categoriesList: [
                {
                    icon: `bx bx-leaf`,
                    title: `Randonnée`,
                    link: `search-page`
                },
                {
                    icon: `bx bx-leaf`,
                    title: `Safari`,
                    link: `search-page`
                },
                {
                    icon: `bx bx-leaf`,
                    title: `Camping`,
                    link: `search-page`
                },
                {
                    icon: `bx bx-leaf`,
                    title: `Tyrolienne`,
                    link: `search-page`
                },

                {
                    icon: `bx bx-leaf`,
                    title: `VTT`,
                    link: `search-page`
                },
                {
                    icon: `bx bx-leaf`,
                    title: `Excursion à cheval`,
                    link: `search-page`
                },
                {
                    icon: `bx bx-leaf`,
                    title: `Exploration de grottes`,
                    link: `search-page`
                },
            ],
            buttonText: `Voir tous les événements`,
            buttonLink: `categories`
        }
    ]
    mainBannerBox = [
        {
            image: `assets/img/banner/starwars.jpg`,
            title: `Unique Stays Around The World`,
            paragraph: `Tents, treehouses, and more—these spaces are more than just a place to sleep.`,
            buttonText: `Show All Hotel & Resort`,
            buttonLink: `search-page`
        },
        {
            image: `assets/img/banner/hike.jpg`,
            title: `Find the Best Auto Service and Repair Companies`,
            paragraph: `Tents, treehouses, and more—these spaces are more than just a place to sleep.`,
            buttonText: `Show All Repair Companies`,
            buttonLink: `search-page`
        },
        {
            image: `assets/img/banner/barka.jpg`,
            title: `Find the Best Restaurant`,
            paragraph: `Tents, treehouses, and more—these spaces are more than just a place to sleep.`,
            buttonText: `Show All Restaurant`,
            buttonLink: `search-page`
        },
        {
            image: `assets/img/banner/asafer.jpg`,
            title: `Top 10 Electronic Companies in USA`,
            paragraph: `Tents, treehouses, and more—these spaces are more than just a place to sleep.`,
            buttonText: `Show All Companies`,
            buttonLink: `search-page`
        },
        {
            image: `assets/img/banner/kamel.jpg`,
            title: `Find the Best Gym Center`,
            paragraph: `Tents, treehouses, and more—these spaces are more than just a place to sleep.`,
            buttonText: `Show All Gym Center`,
            buttonLink: `search-page`
        },
        {
            image: `assets/img/banner/zipline.jpg`,
            title: `Travel the Whole World`,
            paragraph: `Tents, treehouses, and more—these spaces are more than just a place to sleep.`,
            buttonText: `Show All Gateways`,
            buttonLink: `search-page`
        }
    ]

    homeSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				autoHeight: true
			},
			992: {
				autoHeight: false
			}
		}
    }
    navigate2(categ:String) {
        this.router.navigate(['/evenements', {categ: categ}]);
    }
}
