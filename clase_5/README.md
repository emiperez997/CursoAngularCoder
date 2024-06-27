# Clase 5: Comunicación entre componentes

## Bootstrap

- Para agregar Bootstrap a nuestro proyecto, podemos insertar el cdn dentro del archivo `index.html`

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
  crossorigin="anonymous"
/>

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
  crossorigin="anonymous"
></script>
```

## Componentes anidados

- No hay limite para los componentes
- Un componente puede contener miles de componentes
- Es similar a cualquier otro componente con la diferencia que contiene la lógica derivada de otro componente principal
- Nos permiten poner lógica reutilizable
- Permiten envíar datos de un componente a otro

```bash
# Creamos un componentes con el CLI
ng g component components/nested-component-1
ng g component components/nested-component-2
```

- app.component.html: Componente padre
- nested-component-1.component.html: Componente hijo 1
- nested-component-2.component.html: Componente hijo 2

- Para que angular reconozca los componentes debemos importarlos en `declarations` del `app.module.ts`

```ts
import { NestedComponent1Component } from "./components/nested-component-1/nested-component-1.component";
import { NestedComponent2Component } from "./components/nested-component-2/nested-component-2.component";

@NgModule({
  declarations: [
    AppComponent,
    NestedComponent1Component,
    NestedComponent2Component,
  ],
  // ...
})
export class AppModule {}
```

`@Input()`: Nos sirve para enviar datos del padre al hijo

```ts
// app.component.ts

import { Component } from "@angular/core";
import { Empleado } from "./models/Empleado";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "proyecto-4";

  empleados: Empleado[] = [
    {
      id: 1,
      nombre: "Juan",
      apellido: "Perez",
      email: "juan@gmail.com",
    },
    {
      id: 2,
      nombre: "Maria",
      apellido: "Perez",
      email: "maria@gmail.com",
    },
    {
      id: 3,
      nombre: "Pedro",
      apellido: "Perez",
      email: "pedro@gmail.com",
    },
    {
      id: 4,
      nombre: "Ana",
      apellido: "Perez",
      email: "ana@gmail.com",
    },
    {
      id: 5,
      nombre: "Luis",
      apellido: "Perez",
      email: "luis@gmail.com",
    },
  ];
}
```

```ts
// empleados-lista.component.ts

import { Component, Input } from "@angular/core";
import { Empleado } from "../../models/Empleado";

@Component({
  selector: "app-empleados-lista",
  templateUrl: "./empleados-lista.component.html",
  styleUrl: "./empleados-lista.component.scss",
})
export class EmpleadosListaComponent {
  @Input() empleado: Empleado;

  constructor() {}
}
```

```html
<!-- app.component.html -->

<app-empleados-lista [data]="empleados" />
```

```html
<!-- empleados-lista.component.html -->

<ul class="list-group" *ngFor="let empleado of data">
  <li class="list-group-item">{{ empleado.nombre }} {{ empleado.apellido }}</li>
</ul>
```

`@Output()`: Emite eventos desde el componente hijo a su padre

```ts
// empleados-lista.component.ts

import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Empleado } from "../../models/Empleado";

@Component({
  selector: "app-empleados-lista",
  templateUrl: "./empleados-lista.component.html",
  styleUrl: "./empleados-lista.component.scss",
})
export class EmpleadosListaComponent {
  // Recibe los datos del componente padre
  @Input() data: Empleado[] = [];

  // Envio eventos desde el componente hijo a su padre
  @Output() eliminarEmpleado = new EventEmitter();
}
```

```html
<!-- empleados-lista.component.html -->

<ul class="list-group" *ngFor="let empleado of data">
  <li class="list-group-item">
    #{{ empleado.id }} - {{ empleado.nombre }} {{ empleado.apellido }}
    <button
      class="btn btn-outline-danger"
      (click)="eliminarEmpleado.emit(empleado.id)"
    >
      Eliminar
    </button>
  </li>
</ul>
```

```ts
// app.component.ts

// ...
eliminarEmpleado(id: number) {
  console.log('Eliminando empleado');

  this.empleadosDesigners = this.empleadosDesigners.filter(
    (empleado) => empleado.id !== id,
  );
}
```

```html
<!-- app.component.html -->

<div class="container my-5">
  <h2>Lista de Empleados</h2>

  <app-empleados-lista
    (eliminarEmpleado)="eliminarEmpleado($event)"
    [data]="empleadosDesigners"
  />
</div>
</div>
```

`@ViewChild()`: Permite obtener un elemento de un componente hijo dentro del DOM. Similar a `Query Selector`

```ts
// app.component.ts

// ...
@ViewChild(EmpleadosListaComponent)
empleadosListaComponent?: EmpleadosListaComponent;

constructor() {
  // Devuelve undefined
  console.log(this.empleadosListaComponent);
}
```

## Ciclo de vida de los Componentes

- Cuando mostramos un nuevo componente, sige un ciclo de vida
- Angular crea el componente, lo renderiza, crea y renderiza sus hijos, chequea cuando los datos cambian, y destruye quitandolo del DOM.
- Angular ofrece hooks para cada uno de estos eventos

1. Constructor
2. ngOnChanges
3. ngOnInit
4. ngDoCheck

   - ngAfterContentInit
   - ngAfterContentChecked
   - ngAfterViewInit
   - ngAfterViewChecked

5. ngOnDestroy

[Ciclo de Vida de los Componente](https://medium.com/angular-chile/angular-componentes-y-sus-ciclos-de-vida-aa639e13a688)

- Para poder aplicar el cliclo de vida a nuestro componente debemos implementar la interfaz de `AfterViewInit`

```ts
// app.component.ts

import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { Empleado } from "./models/Empleado";
import { EmpleadosListaComponent } from "./components/empleados-lista/empleados-lista.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements AfterViewInit {
  // ...

  // ViewChild
  @ViewChild(EmpleadosListaComponent)
  empleadosListaComponent?: EmpleadosListaComponent;

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    console.log(this.empleadosListaComponent);
  }

  // ...
}
```

- Para seleccionar un elemento HTML dentro de nuestro componente podemos colocarle un id con `#` dentro del elemento

```html
<!-- app.component.html -->
<div #myDiv class="container my-5">...</div>
```

## Aclaraciones

Dentro de los componentes, podemos definir propiedades de las siguientes maneras:

- `[]`: Información de padre a hijo (Datos)
- `()`: Información de hijo a padre (Eventos)
- `[()]`: Información en doble sentido
