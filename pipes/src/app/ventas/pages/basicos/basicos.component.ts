import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
// instalamos  npm install primeflex --save
/*
styles": [
    "src/styles.scss",
    "./node_modules/primeflex/primeflex.css"
],
*/
  
  nombreLower: string = 'ceads';
  nombreUpper: string = 'CEADS';
  nombreCompleto: string = 'caRlOs ArteAga';

  fecha:Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
