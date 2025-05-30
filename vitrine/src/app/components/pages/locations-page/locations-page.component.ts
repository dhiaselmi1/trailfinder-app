import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-locations-page',
    templateUrl: './locations-page.component.html',
    styleUrls: ['./locations-page.component.scss']
})
export class LocationsPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: `assets/img/page-title/page-title1.jpg`,
            title: `All Locations`
        }
    ]
    locationsBox = [
        {
            city: `New York`,
            link: `search-page`,
            locationsList: [
                {
                    name: `Central Park`,
                    count: `1`
                },
                {
                    name: `Observation Deck`,
                    count: `2`
                },
                {
                    name: `Metropolitan Museum`,
                    count: `3`
                },
                {
                    name: `Theater District`,
                    count: `4`
                },
                {
                    name: `Broadway`,
                    count: `5`
                }
            ]
        },
        {
            city: `Chicago`,
            link: `search-page`,
            locationsList: [
                {
                    name: `Grant Park`,
                    count: `1`
                },
                {
                    name: `Millennium`,
                    count: `2`
                },
                {
                    name: `Navy Pier`,
                    count: `3`
                },
                {
                    name: `Industry`,
                    count: `4`
                },
                {
                    name: `Buckingham`,
                    count: `5`
                }
            ]
        },
        {
            city: `Los Angeles`,
            link: `search-page`,
            locationsList: [
                {
                    name: `Griffith`,
                    count: `5`
                },
                {
                    name: `Disneyland`,
                    count: `4`
                },
                {
                    name: `Getty`,
                    count: `3`
                },
                {
                    name: `Empire State`,
                    count: `2`
                },
                {
                    name: `SkyDeck`,
                    count: `1`
                }
            ]
        },
        {
            city: `Melbourne`,
            link: `search-page`,
            locationsList: [
                {
                    name: `Petersen`,
                    count: `3`
                },
                {
                    name: `Monica`,
                    count: `2`
                },
                {
                    name: `Natural`,
                    count: `5`
                },
                {
                    name: `Science`,
                    count: `4`
                },
                {
                    name: `Broad`,
                    count: `1`
                }
            ]
        },
        {
            city: `Tokyo`,
            link: `search-page`,
            locationsList: [
                {
                    name: `Central Park`,
                    count: `1`
                },
                {
                    name: `Observation Deck`,
                    count: `2`
                },
                {
                    name: `Metropolitan Museum`,
                    count: `3`
                },
                {
                    name: `Theater District`,
                    count: `4`
                },
                {
                    name: `Broadway`,
                    count: `5`
                }
            ]
        },
        {
            city: `London`,
            link: `search-page`,
            locationsList: [
                {
                    name: `Grant Park`,
                    count: `1`
                },
                {
                    name: `Millennium`,
                    count: `2`
                },
                {
                    name: `Navy Pier`,
                    count: `3`
                },
                {
                    name: `Industry`,
                    count: `4`
                },
                {
                    name: `Buckingham`,
                    count: `5`
                }
            ]
        },
        {
            city: `Beijing`,
            link: `search-page`,
            locationsList: [
                {
                    name: `Griffith`,
                    count: `5`
                },
                {
                    name: `Disneyland`,
                    count: `4`
                },
                {
                    name: `Getty`,
                    count: `3`
                },
                {
                    name: `Empire State`,
                    count: `2`
                },
                {
                    name: `SkyDeck`,
                    count: `1`
                }
            ]
        },
        {
            city: `Jakarta`,
            link: `search-page`,
            locationsList: [
                {
                    name: `Petersen`,
                    count: `3`
                },
                {
                    name: `Monica`,
                    count: `2`
                },
                {
                    name: `Natural`,
                    count: `5`
                },
                {
                    name: `Science`,
                    count: `4`
                },
                {
                    name: `Broad`,
                    count: `1`
                }
            ]
        }
    ]

}