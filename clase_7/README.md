# Clase 7: Angular Material

- Es un framework de componentes desarrollado por Google
- Está basada en Material Design (Enfocada al entorno Android)

## Instalación

- Creamos el proyecto con Angular CLI

```bash
ng new nombre-proyecto
```

- Utilizamos el CLI para instalar Angular Material

```bash
ng add @angular/material
```

- Respondemos a las preguntas que nos ofrece el CLI (para este proyecto seleccionamos las siguientes opciones)

```bash
? Choose a prebuilt theme for the project (Use arrow keys): Custom
? Set up global Angular Material typography styles? Yes
? Include the Angular animation module? Yes
```

## Estructura de carpetas

- `features`: Contiene los módulos (o páginas) que contengan las secciones de nuestro proyecto

```bash
features
├── auth
│   ├── login
│   └── register
├── dashboard
│   ├── courses
│   └── students
```

- Dentro de cada feature creamos un módulo con el CLI de Angular

```bash
ng g module features/dashboard --routing
```

`--routing`: Crea un módulo con rutas

> [!NOTE]
> Para poder utilizar los componentes debemos importar los módulos necesarios en el módulo principal

> [!NOTE]
> Si estamos utilizando componentes `standalone` debemos importar los componentes directamente en el componente de la app principal (`app.component.ts`)

## Componentes

- Cuando queramos utilizar un componente externo debemos importar

```ts
import { MatSidenavModule } from "@angular/material/sidenav";
```

Colores de Angular Material

- Primary
- Accent
- Warn

## Dialogos

- Para mostrar un dialogo debemos utilizar el servicio `MatDialog`

```ts
// course.component.ts

import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CourseDialogComponent } from "./components/course-dialog/course-dialog.component";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrl: "./courses.component.scss",
})
export class CoursesComponent {
  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog
      .open(CourseDialogComponent) // Abre el componente de dialogo
      .afterClosed() // Luego de cerrarse
      .subscribe({
        // Escucha el evento de cierre
        next: (course) => {
          // next: Cuando se cierre el dialogo
          console.log(course);

          this.course = course.title;
        },
      });
  }
}
```

```ts
// course-dialog.component.ts

import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-course-dialog",
  templateUrl: "./course-dialog.component.html",
  styleUrl: "./course-dialog.component.scss",
})
export class CourseDialogComponent {
  courseForm: FormGroup;

  constructor(
    private formBuildaer: FormBuilder,
    private matDialogRef: MatDialogRef<CourseDialogComponent>,
  ) {
    this.courseForm = this.formBuildaer.group({
      title: [],
    });
  }

  onSubmit(): void {
    console.log(this.courseForm.value);
    this.matDialogRef.close(this.courseForm.value);
  }
}
```

```html
<!-- course-dialog.component.html -->

<h2 mat-dialog-title>Crear Curso</h2>

<mat-dialog-content>
  <form [formGroup]="courseForm">
    <mat-form-field>
      <mat-label>Nombre del Curso</mat-label>
      <input matInput name="title" formControlName="title" />
    </mat-form-field>
  </form>
</mat-dialog-content>

<mat-dialog-actions>
  <button mat-button mat-dialog-close>Cancelar</button>
  <button mat-button (click)="onSubmit()">Crear</button>
</mat-dialog-actions>
```
