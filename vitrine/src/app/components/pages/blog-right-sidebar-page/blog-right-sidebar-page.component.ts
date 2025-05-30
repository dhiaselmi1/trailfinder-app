import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blog-right-sidebar-page',
    templateUrl: './blog-right-sidebar-page.component.html',
    styleUrls: ['./blog-right-sidebar-page.component.scss']
})
export class BlogRightSidebarPageComponent implements OnInit {

    blogRightSidebar: number = 1;

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: `assets/img/page-title/page-title4.jpg`,
            title: `Blog Right Sidebar`,
        }
    ]
    singleBlogPost = [
        {
            image: `assets/img/blog/blog1.jpg`,
            tag: `Travel`,
            tagLink: `blog-grid`,
            title: `The top 5 destinations for travel in July 2023: New edition`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`,
            detailsText: `Read More`,
            detailsLink: `blog-details`
        },
        {
            image: `assets/img/blog/blog2.jpg`,
            tag: `Business`,
            tagLink: `blog-grid`,
            title: `A 10-step guide to decarbonising your travel business`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`,
            detailsText: `Read More`,
            detailsLink: `blog-details`
        },
        {
            image: `assets/img/blog/blog3.jpg`,
            tag: `Europe`,
            tagLink: `blog-grid`,
            title: `10 things you’ll experience on an Intrepid Retreat in Europe`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`,
            detailsText: `Read More`,
            detailsLink: `blog-details`
        },
        {
            image: `assets/img/blog/blog4.jpg`,
            tag: `Travel`,
            tagLink: `blog-grid`,
            title: `Be Together: the joys and challenges of active adventures`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`,
            detailsText: `Read More`,
            detailsLink: `blog-details`
        },
        {
            image: `assets/img/blog/blog5.jpg`,
            tag: `Business`,
            tagLink: `blog-grid`,
            title: `Sharing culture and art with a local Aboriginal artist`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`,
            detailsText: `Read More`,
            detailsLink: `blog-details`
        },
        {
            image: `assets/img/blog/blog6.jpg`,
            tag: `Europe`,
            tagLink: `blog-grid`,
            title: `Introducing our reconciliation action plan artwork`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`,
            detailsText: `Read More`,
            detailsLink: `blog-details`
        },
        {
            image: `assets/img/blog/blog1.jpg`,
            tag: `Travel`,
            tagLink: `blog-grid`,
            title: `The top 5 destinations for travel in July 2023: New edition`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`,
            detailsText: `Read More`,
            detailsLink: `blog-details`
        },
        {
            image: `assets/img/blog/blog2.jpg`,
            tag: `Business`,
            tagLink: `blog-grid`,
            title: `A 10-step guide to decarbonising your travel business`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`,
            detailsText: `Read More`,
            detailsLink: `blog-details`
        }
    ]

}
