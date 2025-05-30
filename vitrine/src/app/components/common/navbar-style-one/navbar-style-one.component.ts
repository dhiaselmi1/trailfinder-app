import { Component, OnInit, HostListener } from '@angular/core';
import {CartService} from "../../../_services/cart.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-navbar-style-one',
    templateUrl: './navbar-style-one.component.html',
    styleUrls: ['./navbar-style-one.component.scss']
})
export class NavbarStyleOneComponent implements OnInit {
    public totalItem : number = 0;
user_id:any = null;
    constructor(private cartService : CartService,
                private router:Router) { }

    ngOnInit(): void {
        this.cartService.getProducts()
            .subscribe(res=>{
                this.totalItem = res.length;
            })
        this.user_id = localStorage.getItem("id");
        console.log( this.user_id );

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

    logout() {
        localStorage.clear();
        window.location.reload();


    }

    navigate(lieu:String) {
        this.router.navigate(['/evenements', {lieux: lieu}]);
    }
    navigate2(categ:String) {
        this.router.navigate(['/evenements', {categ: categ}]);
    }navigate3(categ:String) {
        this.router.navigate(['/all-agences', {categ: categ}]);
    }

    navigate4(id:number) {
        this.router.navigate(['/partenaire', {id: id}]);
    }
}
