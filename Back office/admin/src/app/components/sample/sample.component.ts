import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  options$: Observable<number[]>;
  constructor() {
    this.options$=of([1,2,3,4,5,6]);
  }


  ngOnInit() {
  }

}
