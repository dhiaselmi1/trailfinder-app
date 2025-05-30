import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-why-choose-us',
    templateUrl: './why-choose-us.component.html',
    styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: `Étapes de paiement`,
            paragraph: `Notre plateforme propose une méthode de paiement simple et intuitive, conçue pour rendre votre expérience d'achat fluide et sans tracas.`
        }
    ]
    singleWhyChooseBox = [
        {
            icon: `bx bx-log-in`,
            title: `Authentification`,
            subTitle: ` Identifiez-vous rapidement et facilement`
        },
        {
            icon: `bx bx-credit-card`,
            title: `Informations bancaires`,
            subTitle: `Vos données seront cryptées et sécurisées`
        },
        {
            icon: `bx bx-dollar`,
            title: `Confirmation de l'achat`,
            subTitle: `Passez en revue tous les détails de votre commande`
        }
    ]
    whyChooseContent = [
        {
            buttonText: `Créer un compte`,
            buttonLink: `créer-compte`
        }
    ]

}
