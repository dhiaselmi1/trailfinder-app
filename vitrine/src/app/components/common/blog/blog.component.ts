import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: `Nos Articles Best-Sellers`,
            paragraph: `Notre sélection de produits populaires combine qualité, style et fonctionnalité pour répondre à vos besoins quand vous partez en aventure.`
        }
    ]

    singleBlogPost = [
        {
            image: `assets/img/articles/Tent.jpg`,
            tag: `Camping`,
            tagLink: `boutique`,
            title: `Un Abri de Premier Choix : Tente de Camping `,
            paragraph: `Découvrez l'excellence en matière de camping avec notre tente de haute qualité, conçue pour les aventuriers exigeants.`,
            detailsText: `Voir l'article`,
            detailsLink: `boutique`
        },
        {
            image: `assets/img/articles/jumelles.jpg`,
            tag: `Randonnée`,
            tagLink: `boutique`,
            title: `Voyez Plus Loin : Jumelles de Vue`,
            paragraph: `Explorez le monde qui vous entoure avec une clarté exceptionnelle grâce à nos jumelles de vue de haute qualité. `,
            detailsText: `Voir l'article`,
            detailsLink: `boutique`
        },
        {
            image: `assets/img/articles/SacCouchage.jpg`,
            tag: `Camping`,
            tagLink: `boutique`,
            title: `Un Sommeil Rêvé : Sac de Couchage he `,
            paragraph: `Plongez dans un sommeil réparateur sous les étoiles avec notre sac de couchage fabriqué à partir de matériaux légers mais isolants. `,
            detailsText: `Voir l'article`,
            detailsLink: `boutique`
        }
    ]

}
