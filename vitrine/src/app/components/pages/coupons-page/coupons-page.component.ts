import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-coupons-page',
    templateUrl: './coupons-page.component.html',
    styleUrls: ['./coupons-page.component.scss']
})
export class CouponsPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: `assets/img/page-title/page-title4.jpg`,
            title: `Coupon`,
        }
    ]
    singleDealsCouponBox = [
        {
            image: `assets/img/coupon/coupon1.jpg`,
            logo: `assets/img/diamond.png`,
            logoText: `More Diamond Discount Coupons`,
            logoLink: `coupons`,
            title: `Savings on Savings! Buy 2, get 20%`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
            detailsLink: `deals-details`,
            couponCode: `#020202`
        },
        {
            image: `assets/img/coupon/coupon2.jpg`,
            logo: `assets/img/diamond.png`,
            logoText: `More Diamond Discount Coupons`,
            logoLink: `coupons`,
            title: `Savings on Savings! Buy 3, get 50%`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
            detailsLink: `deals-details`,
            couponCode: `#123456`
        },
        {
            image: `assets/img/coupon/coupon3.jpg`,
            logo: `assets/img/diamond.png`,
            logoText: `More Diamond Discount Coupons`,
            logoLink: `coupons`,
            title: `Savings on Savings! Buy 1, get 10%`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
            detailsLink: `deals-details`,
            couponCode: `#654321`
        },
        {
            image: `assets/img/coupon/coupon4.jpg`,
            logo: `assets/img/diamond.png`,
            logoText: `More Diamond Discount Coupons`,
            logoLink: `coupons`,
            title: `Savings on Savings! Buy 2, get 20%`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
            detailsLink: `deals-details`,
            couponCode: `#545454`
        },
        {
            image: `assets/img/coupon/coupon5.jpg`,
            logo: `assets/img/diamond.png`,
            logoText: `More Diamond Discount Coupons`,
            logoLink: `coupons`,
            title: `Savings on Savings! Buy 5, get 80%`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
            detailsLink: `deals-details`,
            couponCode: `#989898`
        },
        {
            image: `assets/img/coupon/coupon1.jpg`,
            logo: `assets/img/diamond.png`,
            logoText: `More Diamond Discount Coupons`,
            logoLink: `coupons`,
            title: `Savings on Savings! Buy 2, get 20%`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
            detailsLink: `deals-details`,
            couponCode: `#020202`
        },
        {
            image: `assets/img/coupon/coupon2.jpg`,
            logo: `assets/img/diamond.png`,
            logoText: `More Diamond Discount Coupons`,
            logoLink: `coupons`,
            title: `Savings on Savings! Buy 3, get 50%`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
            detailsLink: `deals-details`,
            couponCode: `#123456`
        },
        {
            image: `assets/img/coupon/coupon3.jpg`,
            logo: `assets/img/diamond.png`,
            logoText: `More Diamond Discount Coupons`,
            logoLink: `coupons`,
            title: `Savings on Savings! Buy 1, get 10%`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
            detailsLink: `deals-details`,
            couponCode: `#654321`
        }
    ]

}