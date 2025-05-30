import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ps-list-achat',
  templateUrl: './list-achat.component.html',
  styleUrls: ['./list-achat.component.scss']
})
export class ListAchatComponent implements OnInit{
 constructor() {
 }
  data: any[] = [];
  imageToShow:any[] =[];
  p:number = 1;
  itemPerPage:number= 12;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
