import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../_services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-how-it-works-page',
    templateUrl: './how-it-works-page.component.html',
    styleUrls: ['./how-it-works-page.component.scss']
})
export class HowItWorksPageComponent implements OnInit {
register:any = {};
    constructor(private router: Router,private Auth:AuthService) { }

    ngOnInit(): void {
        this.register =
            {
               email:"",
               password:"",
                passwordConfirmation:"",
                 first_name:"",
                 last_name:"",
               phone_number:""
            }
    }

    pageTitle = [
        {
            bgImage: `assets/img/agences/community.jpg`,
            title: `Joindre SummitSells`,
        }
    ]
    singleHowItWorkBox = [
        {
            title: `Participer aux événements`,
            paragraph: `Vous avez le pouvoir de rechercher, explorer et réserver une variété de circuits de randonnées qui correspondent à vos préférences et à vos besoins.`,
            buttonText: `Créer un compte`,
            buttonLink: `profile-authentication`,
            img: `assets/img/agences/utilisateur.jpg`
        },
        {
            title: `Organiser des événements`,
            paragraph: `En tant qu'agence, votre mission est de concevoir et de proposer des itinéraires passionnants, sécurisés et enrichissants dans différentes régions en Tunisie.`,
            buttonText: `Créer un compte`,
            buttonLink: `dashboard-profile`,
            img: `assets/img/agences/agence.jpg`
        },
        {
            title: `Devenir partenaire de SummitSells`,
            paragraph: `En tant que partenaire, vous jouerez un rôle essentiel en fournissant les ressources nécessaires pour développer et faire évoluer la plateforme, ce qui peut inclure des investissements pour l'expansion, le marketing et l'amélioration des fonctionnalités techniques.`,
            buttonText: `Créer un compte`,
            buttonLink: `profile-authentication`,
            img: `assets/img/agences/partenaire.jpg`
        }
    ]

    create() {
        this.Auth.register(this.register).subscribe((response : any)=>{


                console.log(response);
                this.register =
                    {
                        email:"",
                        password:"",
                        passwordConfirmation:"",
                        first_name:"",
                        last_name:"",
                        phone_number:""
                    };
                this.router.navigate(["/profile-authentication"]);

            },
            (err: HttpErrorResponse) => {
                console.log(err);

            },
            () => {

            })



    }
}
