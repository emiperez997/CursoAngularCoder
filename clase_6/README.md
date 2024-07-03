# Clase 6: Formularios en Angular / Reactive Forms

## Reactive Forms

- Nos permite crear y manipular todo desde los comportamientos de Angular
- Vienen por defecto cuando creamos una nueva app en Angular
- Para utilizarlos tenemos que importarlos

```ts
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [FormsModule, ReactiveFormsModule],
})
export class AppModule {}
```

`FormBuilder`: Es una clase que nos permite crear formularios que lo controlen TypeScript. Crean objetos del tipo FormGroup y FormControl.

- Para utilizarlo, utilizamos inyección de dependencias dentro del componente

```ts
// reactive-forms.component.ts

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-reactive-forms",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./reactive-forms.component.html",
  styleUrl: "./reactive-forms.component.scss",
})
export class ReactiveFormsComponent {
  constructor(private readonly formBuilder: FormBuilder) {}
}
```

- Se agrupan los campos dentro de un `FormGroup`

`FormGroup`: Es la representación de un formulario en Angular

```ts
export class ReactiveFormsComponent {
  registerForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    // Dentro del group, se crean los campos
    this.registerForm = this.formBuilder.group({
      // Se pueden agregar validaciones o valores iniciales dentro del array
      // No es un placeholder
      firstName: [],
      lastName: [],
    });
  }
}
```

- Para conectar los campos del grupo debo envolver mis elementos del `HTML` dentro de la etiqueta `form`

```html
<form [formGroup]="registerForm">
  <!-- ... -->
</form>
```

- En cada input, debemos agregar el `formControlName` con el nombre del campo que queremos conectar

```html
<input
  [formControlName]="'firstName'"
  type="text"
  class="form-control"
  placeholder="First name"
  aria-label="First name"
/>
```

- Para mostrar los valores del formulario, debemos utilizar el pipe `json`

```html
<pre>
  {{ registerForm.value | json }}
</pre>
```

> [!NOTE]
> Para utilizar el pipe `json` debemos importarlo en el módulo principal (CommonModule)

> [!NOTE]
> Al utilizar `standalone: true` en el componente, debemos importar el módulo `ReactiveFormsModule` en el módulo donde lo utilicemos

## Validaciones

- Dentro de nuestro formulario, podemos agregar validaciones

```ts
export class ReactiveFormsComponent {
  registerForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
    });
  }
}
```

- Para enviar el formulario, debemos utilizar el evento `ngSubmit`

```html
<form (ngSubmit)="onSubmit()" [formGroup]="registerForm">
  <!-- ... -->
</form>
```

- En nuestro componente, debemos implementar el método `onSubmit`

```ts
export class ReactiveFormsComponent {
  // ...

  onSubmit() {
    // Aquí podemos crear validaciones
    if (this.registerForm.invalid) {
      alert("Formulario no válido");
      return;
    }

    console.log(this.registerForm.value);
  }
}
```

> [!NOTE]
> Para agregar más validadores, debemos reemplazar el objeto `Validators` por un array de validadores

```ts
this.registerForm = this.formBuilder.group({
  firstName: ["", [Validators.required, Validators.minLength(3)]],
  lastName: ["", [Validators.required, Validators.minLength(3)]],
});
```

- Para agregar validacion al input debemos utilizar `ngClass` y verificar los campos del registro con `registerForm.get(campo)`

```html
<input
  formControlName="lastName"
  type="text"
  class="form-control"
  [ngClass]="{
    'is-invalid':
      registerForm.get('lastName')?.invalid &&
      registerForm.get('lastName')?.touched,
    'is-valid':
      registerForm.get('lastName')?.valid &&
      registerForm.get('lastName')?.touched,
  }"
  placeholder="Last name"
  aria-label="Last name"
/>
```

## Template Driven Forms

- Debemos crear un objeto dentro de nuestro componente

```ts
export class TemplateDrivenComponent {
  registerForm = {
    firstName: "",
    lastName: "",
  };
}
```

- Luego podemos usar el `ngModel` para mostrar y actualizar los validadores

```html
<form #myRegisterForm="ngForm">
  <div class="row">
    <div class="col">
      <input
        #firstNameControl="ngModel"
        name="firstName"
        [(ngModel)]="registerForm.firstName"
        [ngClass]="{
                  'is-invalid':
                    firstNameControl?.invalid && firstNameControl?.touched,
                  'is-valid':
                    !firstNameControl?.invalid && firstNameControl?.touched,
                }"
        type="text"
        class="form-control"
        placeholder="First name"
        aria-label="First name"
        required
      />
    </div>
  </div>
</form>
```
