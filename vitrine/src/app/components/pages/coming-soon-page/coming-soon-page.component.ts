import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-coming-soon-page',
    templateUrl: './coming-soon-page.component.html',
    styleUrls: ['./coming-soon-page.component.scss']
})
export class ComingSoonPageComponent implements OnInit {

    days: any;
    hours: any;
    minutes: any;
    seconds: any;
    myInterval: any;

    constructor() { }

    ngOnInit() {
        this.myInterval = setInterval(() => {
            this.commingSoonTime();
        }, 0);
    }

    comingSoonContent = [
        {
            bgImage: `assets/img/coming-soon-bg.jpg`,
            title: `We Are Launching Soon`
        }
    ]

    commingSoonTime = () => {
        const endTimeParse = (Date.parse('January 20, 2024 17:00:00 PDT')) / 1000;
        const now = new Date();
        const nowParse = (Date.parse(now.toString()) / 1000);
        const timeLeft = endTimeParse - nowParse;
        const days = Math.floor(timeLeft / 86400);
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < 10) { hours = 0 + hours; }
        if (minutes < 10) { minutes = 0 + minutes; }
        if (seconds < 10) { seconds = 0 + seconds; }
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

}