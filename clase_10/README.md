# Clase 10: Introducción a la programación reactiva con RxJS

## RxJS

- [Documentación oficial](https://rxjs.dev)
- No sólo sirve para Angular, sino que se puede utilizar en cualquier proyecto web

## Promesas

- Se resuelve o se rechaza
- Cuando se ejecuta todo bien, se resuelve en el `.then`
- Si algo sale mal, se rechaza la promesa y se resuelve en el `.catch`
- Para ejecutar siempre una ultima función, se puede utilizar el `finally`

## Diferencias entre promesas y observables

| Promesas                        | Observables                                  |
| ------------------------------- | -------------------------------------------- |
| Cuando se rechazan, se finaliza | Pueden estar emitiendo valores continuamente |
| Devuelven un único resultado    | Puede definir una secuencia                  |

## Observables

- Son solo productores de datos
- Pueden emitir multiples valores a lo largo del tiempo
- Se crean a partir de eventos del DOM

```ts
import { Observable } from "rxjs/Observables";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/of";

class Usuario {
  obtenerUsuario() {
    return Observable.of([{ name: "adrgon" }])
      .map((usuario) => usuario[0])
      .catch((error) => console.log(error));
  }
}

let usuario = new Usuario();
let usarioObservable = usuario.obtenerUsuario();

usarioObservable.subscribe(
  (resultado) => {
    console.log(resultado);
  },
  (error) => {
    console.log(error);
  },
);
```

## Subjects

- Pueden comportarse como `Observables` y tambien se pueden usar como `Observadores`
- Implementan la interfaz de `Observador`

## Trabajar con Observables

- Los observables se definen con un `$`
- Para detener el Observable debemos obtener una referencia y llamar a la función `unsubscribe`

```ts
import { Component, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-clase-10-rxjs",

  templateUrl: "./clase-10-rxjs.component.html",
  styleUrl: "./clase-10-rxjs.component.scss",
})
export class Clase10RxjsComponent implements OnDestroy {
  myRandomNumberSuscription?: Subscription;

  // Definimos un Observable
  // Se utiliza el $ como buena práctica
  myRandomNumber$ = new Observable((suscriber) => {
    // Se puede enviar más de un valor
    setInterval(() => {
      suscriber.next(Math.random());
    }, 2000);

    // suscriber.next(Math.random());
  });

  constructor() {
    // Esta suscripción se ejecuta cada vez que se inicialice el componente
    // Obtenemos la referencia de la suscripción
    this.myRandomNumberSuscription = this.myRandomNumber$.subscribe({
      // Recibimos un valor sin errores
      next: (value) => {
        // value: Lo que se envíe por next
        console.log(value);
      },
      // Cuando el Observable emite un error
      error: (error) => {},
      // Cuando el Observable finaliza. Deja de emitir valores
      complete: () => {},
    });
  }

  ngOnDestroy() {
    // Dentro de esta función se deben limpiar los eventos y suscripciones
    // Cuando se destruye el componente se destruye la suscripción
    this.myRandomNumberSuscription?.unsubscribe();
  }
}
```

## Pipes de Observables

- Se deben colocar antes del `.suscribe()`
- Es una función que nos permite transformar los valores de un observable

Pipes comunes:

- `take`: Limita el numero de valores que se emitiendo
- `filter`: Recibe un callback, y realiza una comparación (devuelve booleano)
- `skip`: Omite la emision
- `map`: Recibe un callback para realizar una operación sobre el valor
- `first`: Emite el primer valor
- `tap`: Permite ejecutar una funcion tantas veces quiera. Sirve como un punto de control

```ts
constructor() {
  this.myRandomNumberSuscription = this.myRandomNumber$.pipe(take(2)).subscribe({
    next: (value) => {
      console.log(value);
    },
    error: (error) => {},
    complete: () => {},
  });
}
```

- Para colocar varios pipes debo separarlos con comas
- Se van a ejecutar en el orden en que se escriben

```ts
constructor() {
  this.myRandomNumberSuscription = this.myRandomNumber$
    .pipe(take(2), filter((value) => value > 0.5))
    .subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (error) => {},
      complete: () => {},
    });
}
```

- [Operadores de RxJS](https://rxjs.dev/guide/operators)

## Pipe Async

- Nos permite mostrar el resultado devuelto por un observable

```ts
<h2>Valor del contador: {{ myInterval$ | async }}</h2>

<h3>Cursos</h3>

<pre>
  {{ cursos | async | json }}
</pre>
```

`forkJoin`: Resuelve observables en conjunto. Los resuelve en orden y los completa al mismo tiempo
