import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-join-now',
    templateUrl: './join-now.component.html',
    styleUrls: ['./join-now.component.scss']
})
export class JoinNowComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    joinNowContent = [
        {
            title: `Scannez le code et téléchargez notre App Mobile`,
            paragraph: `Avec notre application mobile, vous pouvez découvrir notre gamme complète de services, effectuer des achats en toute simplicité et rester connecté(e) avec nous où que vous alliez. `,

            buttonLink: `contact`
        }
    ]

}
