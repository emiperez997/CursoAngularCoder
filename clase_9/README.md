# Clase 9: Servicios y RxJS

## Servicios

- Son componentes lógicos que resuelven problemas específicos
- Utilizan la ténica de inyección de dependencias (Dependency Injection)

**Ejemplos**

```ts
// course-dialog.component.ts
constructor(
  private fb: FormBuilder,
  private matDialogRef: MatDialogRef<CourseDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public editingCourse?: Course,
) {
  // ...
}

// realtado.directive.ts
constructor(private elementRef: ElementRef) {
  // ...
}
```

- Para crear un servicio podemos usar el CLI

> [!NOTE]
> La estructura de carpetas, generalmente se utiliza `core/services`

```bash
ng g service core/services/my-service
```

`@Injectable`: Sirve para indicar a Angular que la clase puede inyectarse por medio del constructor

```ts
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}
}
```

`provideIn: 'root'`: Indica que se puede agregar como proveedor en cualquier componente

```ts
@NgModule({
  // ...
  providers: [AuthService],
})
```

**Inyección de dependencias**

- Permite que podamos incluir cualquier tipo de servicio sobre cualquier tipo de componentes
- Utiliza el patrón llamado `Singleton`

**Tipos de inyección**

- `useExisting`: Es como un alias para el proveedor ya registrado
- `useClass`: Definimos que clase va a utilizar el componente o servicio
- `useValue`: Queremos indicar el valor que queremos utilizar
- `useFactory`: Devuelve un valor usando el método factory

**Ejemplos**

`useValue`

- Podemos inyectar un proveedor de `Angular Material` para modificar los estilos de los formularios

```ts
providers: [
  // ...
  {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: { appearance: "outline" },
  },
];
```

> [!NOTE]
> En el caso de el `app.component.ts` sea `standalone`, la configuración de proveedores se hace en el archivo `app.config.ts`

`useClass`

- Podemos inyectar un servicio de `AuthMockService` para poder realizar pruebas
- Con `useClass` les hacemos creer a nuestro componente que es el AuthService original

```ts
providers: [
  // ...
  {
    provide: AuthService,
    useClass: AuthMockService,
  },
];
```

**Injection Token**

- Es un token que nos permite inyectar un valor en un componentes

```ts
// index.ts
import { InjectionToken } from "@angular/core";

export const APP_CONFIG = new InjectionToken("APP_CONFIG");

// auth.module.ts
providers: [
  // ...
  {
    provide: APP_CONFIG,
    useValue: {
      title: "Proyecto 8",
    },
  },
];
```

## RxJs

- Es una librería que nos permite crear apps asincrónicas basadas en eventos
- Proporciona un núcleo (core type), el "Observable", tipos de satélites (satellite types) y operadores inspirados en arrays

**¿Qué proporciona?**

- `Observable`: Ees una colección invocable de valores o eventos futuros (Emite)
- `Observer`: (Suscriber): Es una función que se invoca cuando se emite un valor o evento (Recibe)
- `Operators`: Son funciones puras
- `Schedulers`: Controlan la concurrencia
- `Subjects`: Es el equivalente a un `EventEmitter`
- `Subscriptions`: Representa la ejecución de un Observable

**Ejemplo**

```ts
// courses.component.ts

openDialog(): void {
  this.matDialog
    .open(CourseDialogComponent)
    .afterClosed() // Retorna un Observable
    .subscribe({ // Suscribimos a la emisión de un Observable
      next: (course) => {
        console.log(course);

        this.course = course.title;
      },
    });
}
```

**Comparativa de JS con RxJs**

```js
let button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log("Clicked");
});
```

| Tipo | Single  | Multiple   |
| ---- | ------- | ---------- |
| Pull | Función | Iterador   |
| Push | Promesa | Observable |

| Tipo | Productor                                   | Consumidor                               |
| ---- | ------------------------------------------- | ---------------------------------------- |
| Pull | Pasivo: Produce datos cuando se lo solicita | Activo: Decide cuando necesita los datos |
| Push | Activo: Produce los datos a su ritmo        | Pasivo: Reacciona a los datos recibidos  |

**Sistema Pull**

- El consumidor de datos toma un rol Activo
- Determina la forma que va a recibir los datos del productor (Pasivo)

**Sistema Push**

- El productor determina cuándo se envían los datos (Activo)
- El consumidor recibe los datos

## Observables

- Angular está pensado para programación reactiva
- Son parecidos a las promesas
- El observable recibe un callback y como parametro se pasa el observer
- Cuentan con 3 métodos:
  - Next [value]: Devuelven un valor
  - Error [error]: Devuelven un error
  - Complete: Indica que se ha terminado de emitir

```ts

getUserObservable(): Observable<any> {
  return new Observable((observer) => {
    setTimeout(() => {
      observer.next({
        id: 1,
        name: 'Juan',
        email: 'juan@gmail.com',
      });

      observer.error('Uknown error'); // Este error corta la función
      observer.complete(); // Este complete corta la función
    }, 2000);
  });
}

loginObservable() {
  this.getUserObservable().subscribe({
    next: (user) => {
      console.log(user);
    },
    error: (error) => {
      console.log(error);
    },
    complete: () => {
      console.log('Completado');
    },
  });
}
```
