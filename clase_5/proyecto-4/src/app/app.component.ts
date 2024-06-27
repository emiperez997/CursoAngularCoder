import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Empleado } from './models/Empleado';
import { EmpleadosListaComponent } from './components/empleados-lista/empleados-lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'proyecto-4';

  empleadosDesigners: Empleado[] = [
    {
      id: 1,
      nombre: 'Felipe',
      apellido: 'López',
      email: 'felipe@gmail.com',
    },
    {
      id: 2,
      nombre: 'Arturo',
      apellido: 'Vidal',
      email: 'arturo@gmail.com',
    },
    {
      id: 3,
      nombre: 'Carlos',
      apellido: 'Hernández',
      email: 'carlos@gmail.com',
    },
  ];

  empleadosDevelopers: Empleado[] = [
    {
      id: 4,
      nombre: 'Juan',
      apellido: 'Perez',
      email: 'juan@gmail.com',
    },
    {
      id: 5,
      nombre: 'Maria',
      apellido: 'Martínez',
      email: 'maria@gmail.com',
    },
    {
      id: 6,
      nombre: 'Pedro',
      apellido: 'Castro',
      email: 'pedro@gmail.com',
    },
  ];

  // ViewChild
  @ViewChild(EmpleadosListaComponent)
  empleadosListaComponent?: EmpleadosListaComponent;

  // ViewChild selecting an HTML element
  @ViewChild('myDiv')
  myDiv?: ElementRef<HTMLDivElement>;

  // Hook de ciclo de vida
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    // console.log(this.empleadosListaComponent);
    console.log(this.empleadosListaComponent?.data);
  }

  eliminarEmpleado(id: number, tipo: string) {
    // console.log('Eliminando empleado');

    if (tipo === 'designers') {
      this.empleadosDesigners = this.empleadosDesigners.filter(
        (empleado) => empleado.id !== id,
      );
    } else if (tipo === 'developers') {
      this.empleadosDevelopers = this.empleadosDevelopers.filter(
        (empleado) => empleado.id !== id,
      );
    }
  }
}
