import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StudentsComponent } from './components/students/students.component';
import { NgIconsModule } from '@ng-icons/core';

import {
  heroUsersSolid,
  heroAcademicCapSolid,
  heroBriefcaseSolid,
  heroHomeSolid,
  heroMapSolid,
  heroEnvelopeSolid,
} from '@ng-icons/heroicons/solid';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    ToolbarComponent,
    SidebarComponent,
    StudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      heroUsersSolid,
      heroAcademicCapSolid,
      heroBriefcaseSolid,
      heroHomeSolid,
      heroMapSolid,
      heroEnvelopeSolid,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
