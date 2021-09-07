import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


//primeng
//import {PrimeNgModule} from './prime-ng/prime-ng.module';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//import {MenubarModule} from 'primeng/menubar';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// cambiar el locale de la app
import localeEs from '@angular/common/locales/es-MX';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common'
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //PrimeNgModule,
   // NoopAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule

  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
