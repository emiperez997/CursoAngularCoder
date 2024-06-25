# Clase 4 - Directivas e Interpolación

## Interpolaciones y expresiones

- Angular separa la vista del modelo de datos
- En el modelo de datos tenemos las variables y en la vista implementamos como se muestran los datos
- Las variables que tengamos declaradas a nivel global en el componente se pueden usar en la vista

```ts
// component.ts
export class InterpolacionComponent {
  constructor() {}

  nombre: string = "Juan";
}
```

```html
<!-- component.html -->
<h1>Hola {{ nombre }}</h1>
```

- Las `interpolaciones` se usan con `{{ variable }}`

## Directivas

> [!NOTE]
> Las directivas vistas en esta clase funcionan con la generación de proyecto con la flag `--no-standalone`

- Son un tipo de componentes que nos brinda Angular para manipular la vista
- Se utilizan como una especie de atributos de HTML

`ngClass`: Sirve para aplicar estilos a un elemento. Se puede aplicar lógica de programación dentro de esta directiva

```html
<section>
  <!-- Cuando aplicamos lógica es necesario encerrar la directiva entre corchetes -->
  <p [ngClass]="hayError ? 'error' : 'success'">
    La edad del usuario es: {{ edad + 1 }}
  </p>
  <!-- También se puede utilizar un objeto para aplicar múltiples clases con sus validaciones -->
  <p [ngClass]="{ success: !hayError, error: hayError }">
    El nombre de la app es: {{ title }}
  </p>
  <!-- Podemos aplicar la clase (como si fuera un objeto) con la directiva class -->
  <p [class.error]="hayError" [class.success]="!hayError">
    Nueva forma de aplicar clases
  </p>
</section>
```

`ngStyle`: Sirve para aplicar estilos a un elemento.

```html
<section>
  <p [ngStyle]="{ fontWeight: hayError ? 'bold' : 'thin' }">
    Ng Style: Font Weight
  </p>
  <p [style.font-size]="hayError ? '1.5rem' : '1rem'">Ng Style: Font Size</p>
</section>
```

## Directivas personalizadas

- Podemos generar nuestras propias directivas con el cli

```bash
ng g directive directives/<nombre-directiva>
```

```ts
import { Directive } from "@angular/core";

// Define la clase para que se comporte como Directiva
@Directive({
  // Es lo que vamos a utilizar para aplicar la directiva
  selector: "[appResaltado]",
})
export class ResaltadoDirective {
  constructor() {}
}
```

**¿Cómo se utilizan?**

```ts
import { Directive } from "@angular/core";
import { ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appResaltado]",
})
export class ResaltadoDirective {
  // Inyección de dependencias
  // Necesitamos que Angular nos provea una referencia al elemento al cual aplicamos esta directiva
  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer2,
  ) {
    console.log(elementRef);

    // Manipulamos los estilos del elemento
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background",
      "yellow",
    );

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "text-align",
      "center",
    );
  }
}
```

```html
<p appResaltado>
  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
</p>
```

## Directivas estructurales

- Permiten generar código HTML a partir de un conjunto de valores
- Llevan un simbolo de `*` al principio de la directiva

`ngFor`: Sirve para iterar sobre un array y generar un conjunto de elementos

```html
<ul>
  <li *ngFor="let item of [1, 2, 3]">{{ item }}</li>
</ul>
```

Angular 17 en adelante

```html
<ul>
  @for (fruta of frutas; track $index) {
  <li>{{ $index }} - {{ fruta }}</li>
  }
</ul>
```

`ngIf`: Sirve para mostrar o ocultar un elemento dependiendo de una condición

```html
// Con (click) definimos una función que se ejecutará cuando se haga click en el
botón
<button type="button" (click)="">Mostrar/Ocultar</button>

<div *ngIf="mostrarParrafo">
  <p>Este es un párrafo que se muestra si mostrarParrafo es true</p>
</div>
```

Angular 17 en adelante

```html
@if (mostrarParrafo) {
<p>Este es un párrafo que se muestra si mostrarParrafo es true</p>
}
```

`ngSwitch`: Muestra el contenido evaluando un elemento

```html
<div [ngSwitch]="estadoPago">
  <p *ngSwitchCase="estadoPagoEnum.Aceptado">Su pago ha sido aceptado</p>
  <p *ngSwitchCase="'Pendiente'">Su pago está pendiente</p>
  <p *ngSwitchCase="'Rechazado'">Su pago ha sido rechazado</p>
  <!-- En caso de que no coincida con ninguno de los casos anteriores, se ejecutara este caso -->
  <p *ngSwitchDefault>No se ha podido identificar el estado del pago</p>
</div>
```

Angular 17 en adelante

```html
@switch (estadoPago) { @case (estadoPagoEnum.Aceptado) {
<p>Su pago ha sido aceptado</p>
} @case ("Pendiente") {
<p>Su pago está pendiente</p>
} @case ("Rechazado") {
<p>Su pago ha sido rechazado</p>
} @default {
<p>No se ha podido identificar el estado del pago</p>
} }
```

## Directivas Binding

`[]`: Cuando usamos `[]` estamos pasando un valor de la clase al elemento
`()`: El elemento html notificando al componente que se ha cambiado. Se utiliza para manejar eventos del DOM
`[()]`: Enlazamiento de doble vía (two way binding). Se usan cuando manejamos formularios

```html
<!-- Utilizamos una propiedad de la clase dentro del atributo [type] -->
<input [type]="inputType" />
```

- Para trabajar con formularios debemos importar `FormsModule` en el módulo principal

`[(ngModel)]`: Enlazamos una propiedad que este declarada dentro de nuestro componente

```ts
// component.ts
export class AppComponent {
  loginForm = {
    password: "",
  };
}
```

```html
<!-- Utilizamos la propiedad de la clase dentro del atributo [(ngModel)] -->
<input [(ngModel)]="loginForm.password" />
```

- Para ver el valor actual de la propiedad debemos utilizar el pipe `json`

```html
<!-- Hacemos un pipe de json para mostrar el valor actual de la propiedad -->
<pre>{{ loginForm | json }}</pre>
```

## Pipes

- Son una forma de transformar datos
- Permiten transformar datos de un tipo a otro
- Sirven para aplicar una función a un valor

```html
<p>Nombre: {{ username | uppercase }}</p>
<p>Sueldo: {{ sueldo | currency: "ARS" }}</p>
<p>Fecha de nacimiento: {{ dateBirth | date: "dd-MM-YYYY" }}</p>
```

[Documentación de pipes](https://angular.dev/guide/pipes)
