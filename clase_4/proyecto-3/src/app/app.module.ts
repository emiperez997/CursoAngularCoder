import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResaltadoDirective } from './directives/resaltado.directive';

// Cambiar el idioma en las fechas

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-AR';

registerLocaleData(localeEs, 'es-AR');

@NgModule({
  declarations: [AppComponent, ResaltadoDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-AR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
