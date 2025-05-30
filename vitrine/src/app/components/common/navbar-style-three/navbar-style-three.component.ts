import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-navbar-style-three',
    templateUrl: './navbar-style-three.component.html',
    styleUrls: ['./navbar-style-three.component.scss']
})
export class NavbarStyleThreeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
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