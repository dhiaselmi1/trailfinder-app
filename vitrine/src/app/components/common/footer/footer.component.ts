import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleFooterWidget = [
        {
            logo: `assets/img/logo.png`,
            paragraph: `Suivez-nous sur nos plateformes sociales pour découvrir en avant-première nos nouveaux événements.`
        }
    ]

    marxaYear: number = new Date().getFullYear();

}
