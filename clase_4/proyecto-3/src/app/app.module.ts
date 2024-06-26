import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResaltadoDirective } from './directives/resaltado.directive';

// Cambiar el idioma en las fechas

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-AR';
import { DirectivesComponent } from './components/directives/directives.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StudentsComponent } from './components/students/students.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroAcademicCapSolid,
  heroBriefcaseSolid,
  heroEnvelopeSolid,
  heroHomeSolid,
  heroMapSolid,
  heroUsersSolid,
} from '@ng-icons/heroicons/solid';

registerLocaleData(localeEs, 'es-AR');

@NgModule({
  declarations: [
    AppComponent,
    ResaltadoDirective,
    DirectivesComponent,
    ToolbarComponent,
    SidebarComponent,
    StudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgIconsModule.withIcons({
      heroUsersSolid,
      heroAcademicCapSolid,
      heroBriefcaseSolid,
      heroHomeSolid,
      heroMapSolid,
      heroEnvelopeSolid,
    }),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-AR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
