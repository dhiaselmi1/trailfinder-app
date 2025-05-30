import { Component, OnInit } from '@angular/core';
import {NgxPermissionsService} from "ngx-permissions";

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

  constructor( private permissionsService: NgxPermissionsService,) { }

  ngOnInit(): void {
  }

}
