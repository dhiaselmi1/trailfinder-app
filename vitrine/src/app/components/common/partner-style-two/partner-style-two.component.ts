import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-partner-style-two',
    templateUrl: './partner-style-two.component.html',
    styleUrls: ['./partner-style-two.component.scss']
})
export class PartnerStyleTwoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: `Our Branding Partners`,
            paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
        }
    ]
    partnerItem = [
        {
            img: `assets/img/partner/partner1.png`
        },
        {
            img: `assets/img/partner/partner2.png`
        },
        {
            img: `assets/img/partner/partner3.png`
        },
        {
            img: `assets/img/partner/partner4.png`
        },
        {
            img: `assets/img/partner/partner5.png`
        },
        {
            img: `assets/img/partner/partner6.png`
        }
    ]
    partnerSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 3
			},
			768: {
				items: 4
			},
			992: {
				items: 6
			}
		}
    }

}