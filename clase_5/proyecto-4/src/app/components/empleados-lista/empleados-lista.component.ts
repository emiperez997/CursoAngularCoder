import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../../models/Empleado';

@Component({
  selector: 'app-empleados-lista',
  templateUrl: './empleados-lista.component.html',
  styleUrl: './empleados-lista.component.scss',
})
export class EmpleadosListaComponent {
  // Recibe los datos del componente padre
  @Input() data: Empleado[] = [];

  // Envio eventos desde el componente hijo a su padre
  @Output() eliminarEmpleado = new EventEmitter();
}
