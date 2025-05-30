import { Component, OnInit, HostListener } from '@angular/core';
import {CartService} from "../../../_services/cart.service";

@Component({
    selector: 'app-navbar-style-two',
    templateUrl: './navbar-style-two.component.html',
    styleUrls: ['./navbar-style-two.component.scss']
})
export class NavbarStyleTwoComponent implements OnInit {
    public totalItem : number = 0;

    constructor(private cartService : CartService) { }

    ngOnInit(): void {
        this.cartService.getProducts()
            .subscribe(res=>{
                this.totalItem = res.length;
            })
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

}
