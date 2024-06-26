import { Component } from '@angular/core';

enum EstadoPago {
  Aceptado = 'Aceptado',
  Pendiente = 'Pendiente',
  Rechazado = 'Rechazado',
}

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss',
})
export class DirectivesComponent {
  title = 'proyecto-3';

  edad: number = 27;

  hayError: boolean = true;

  frutas: string[] = ['Pera', 'Mandarina', 'Sandía'];

  mostrarParrafo: boolean = false;

  // Exponer el enum
  estadoPagoEnum = EstadoPago;
  estadoPago: EstadoPago = EstadoPago.Rechazado;

  inputType: 'password' | 'text' = 'password';

  loginForm = {
    password: '',
  };

  username: string = 'Homero Simpson';
  sueldo: number = 1000;
  dateBirth: Date = new Date('1990-01-01');

  alternarParrafo() {
    this.mostrarParrafo = !this.mostrarParrafo;
  }

  alternarTipo() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
}
