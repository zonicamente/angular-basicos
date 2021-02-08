import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbx.interfaces';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})


export class MainPageComponent {

  personajes: Personaje[]=[
    {
      nombre:"Goku",
      poder:15000
    },
    {
      nombre:"Vegeta",
      poder:10000
    }
  ];

}
