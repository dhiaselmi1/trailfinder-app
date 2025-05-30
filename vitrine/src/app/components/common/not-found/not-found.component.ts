import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    errorContent = [
        {
            image: `assets/img/error.png`,
            title: `Error 404 : Page Not Found`,
            paragraph: `The page you are looking for might have been removed had its name changed or is temporarily unavailable.`,
            buttonText: `Back To Homepage`
        }
    ]

}