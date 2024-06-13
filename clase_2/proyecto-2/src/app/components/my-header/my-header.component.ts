import { Component } from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrl: './my-header.component.scss',
})
export class MyHeaderComponent {
  mostrarCursos() {
    console.log('Mostrando cursos');
  }
}
