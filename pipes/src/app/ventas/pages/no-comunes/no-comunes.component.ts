import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Fernando';
  genero:string = 'masculino';
  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }


  //i18nPlural
  clientes: string[] = ['María','Pedro','Eduardo','Fernando'];
  clientesMapa = {
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos dos clientes esperando',
    'other':'tenemos # clientes esperando'
  }

  

  cambiarCliente(){
    this.nombre = 'Melissa';
    this.genero = 'femenino'
  }

  borrarCliente(){
    this.clientes.pop();
  }

  persona = {
      nombre:'Fernando',
      edad:35,
      direccion: 'ottawa, canada'
  }

  //JsonPipe
  heroes = [
    {
      nombre:'Superman',
      vuela: true
    },
    {
      nombre:'Robin',
      vuela: false
    },
    {
      nombre:'Aquaman',
      vuela: false
    }
  ];



  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve('fin de la promesa')
    }, 3500);

  } )

  constructor() { }

  ngOnInit(): void {
  }

}
