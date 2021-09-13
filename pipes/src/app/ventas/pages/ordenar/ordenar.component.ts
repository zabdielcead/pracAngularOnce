import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas:boolean = true;
  ordenarPor: string = '';
  heroes: Heroe[] =[
    {
      nombre: 'Superman',
      vuela: true,
      color:Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color:Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color:Color.verde
    },
    {
      nombre: 'Dare devil',
      vuela: false,
      color:Color.rojo
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


  cambiar(){
    this.enMayusculas = !this.enMayusculas;
  }


  cambiarOrden(valor: string){
      this.ordenarPor = valor;
      console.log(valor);
  }

}
