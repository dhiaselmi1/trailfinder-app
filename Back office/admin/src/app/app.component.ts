import {Component, OnInit} from '@angular/core';
import {NgxPermissionsService} from "ngx-permissions";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'ps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'poco';
  constructor(private permissionsService: NgxPermissionsService,
              private router: Router ) {


  }

  ngOnInit(): void {

    const perm = JSON.parse(localStorage.getItem("permissions"));
    this.permissionsService.loadPermissions(perm);
    console.log(this.permissionsService.getPermissions())
  }

}





