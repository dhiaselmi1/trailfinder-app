import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-top-header',
    templateUrl: './top-header.component.html',
    styleUrls: ['./top-header.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class TopHeaderComponent implements OnInit {

    location: any;
    containerClass: any;
    id:String="";

    constructor(
        private router: Router,
        location: Location
    ) {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationEnd ) {
                this.location = this.router.url;
                if (this.location == '/index-3' || this.location == '/locations' || this.location == '/blog-details' || this.location == '/checkout'){
                    this.containerClass = 'container';
                } else {
                    this.containerClass = 'container-fluid';
                }
            }
        });
    }

    ngOnInit(): void {
      this.id=  localStorage.getItem("id")
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}
