import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-demo-one',
  templateUrl: './home-demo-one.component.html',
  styleUrls: ['./home-demo-one.component.scss']
})
export class HomeDemoOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

      if (!localStorage.getItem('refreshed')) {
          // Rafraîchissez la page et définissez l'indicateur
          window.location.reload();
          localStorage.setItem('refreshed', 'true');
      }
  }

}
