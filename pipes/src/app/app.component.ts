import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// https://www.primefaces.org/primeng/

export class AppComponent implements OnInit{
 nombre: string = 'fernando herrera ';
 valor: number = 1000; 
 obj = {
   nombre: 'cead'
 }

 mostrarNombre(){
   console.log(this.nombre);
   console.log(this.valor);
 }



 constructor(private primeNgConfig: PrimeNGConfig){

 }
 ngOnInit(): void {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
   this.primeNgConfig.ripple = true;
 }

}
