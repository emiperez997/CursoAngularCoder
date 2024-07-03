import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,

    ReactiveFormsModule,
    ReactiveFormsComponent,
    TemplateDrivenComponent,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'proyecto-5';
}
