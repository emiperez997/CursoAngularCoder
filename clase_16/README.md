# Clase 16 - Patrón de diseño Redux con NgRx

## Redux NgRX

- NgRx es un framework que se utiliza para crear aplicaciones reactivas en Angular
- La principal ventaja es hacer un proyecto mantenible a expensas de una laboriosa implementación
- Ofrece un cóigo mantenible y hace que funcione más rápido

Tiene cuatro grandes funcionalidades:

> State + Effects + Router-Store = Store Dev Tool

- `State`: Contenedor del estado controlado
- `Effects`: Fuentes de acciones para reducir el estado en función de interacciones externas (solicitudes, mensajes, eventos, etc)
- `Router-Store`: Actualiza su estado con el último estado del enrutador
- `Store Dev Tool`: Proporciona herramientas de desarrollador e implementación para nuestro store

## Instalación

- Instalamos NgRx

```bash
ng add @ngrx/store
```

- Esto actualiza el `app.module.ts` o `app.config.ts`

```ts
// app.module.ts
import { StoreModule } from "@ngrx/store";

@NgModule({
  imports: [StoreModule.forRoot({})],
})
export class AppModule {}

// app.config.ts
{
  provide: StoreModule.forRoot({}),
}
```

## Modelo del Store

!(State Management Lifecycle)[https://cdn-bdfbc.nitrocdn.com/mpQHUpeCagYMmyclYzWrEuJOvwEOajTJ/assets/images/optimized/rev-1cc25fa/www.unimedia.tech/wp-content/uploads/2023/12/state-management-lifecycle.png]

- `Store`: Contenedor del estado
- `Selector`: Obtiene el estado del store
- `Action`: Lleva a la funcion reductora
- `Reducer`: Evalua la accion y lo filtra por tipo, y realiza la accion en la store
- `Effects`: (No es 100% obligatorio) Dependiendo la accion, va a disparar un efecto que consulte un servicio externo

## Configuración

- Dentro de nuestro proyecto, creamos una carpeta llamada `store` dentro de la crpeta `core`

- Dentro de esa carpeta, creamos un archivo `index.ts` y le insertamos constantes

```ts
import { ActionReducerMap } from "@ngrx/store";

// ActionReducerMap: Es un objeto que contiene todos los reducers
export const rootReducer: ActionReducerMap<any> = {};
```

- Modificamos el `app.component.ts` o el `app.config.ts` y dentro del `StoreModule` incluimos nuestro `rootReducer`

```ts
// app.module.ts
@NgModule({
  imports: [StoreModule.forRoot(rootReducer)],
})
export class AppModule {}

// app.config.ts
{
  provide: StoreModule.forRoot(rootReducer),
}
```

## Ejemplo contador

- Dentro de la carpeta `store` creamos una carpeta llamada `counter` que dentro contenga los siguientes archivos:
  - `counter.actions.ts`: Son funciones que se disparan para modificar el estado
  - `counter.reducer.ts`
  - `counter.selectors.ts`

### Actions

- `createAction`: Crear una accion. Como primer parametro debemos pasarle el identificador seguido del nombre de la accion

```ts
import { createAction } from "@ngrx/store";

export const INCREMENT = createAction("[Counter] increment");
```

### Reducers

- `createReducer`: Crea un reducer. Recibe como parametro el estado inicial.

```ts
import { createReducer } from "@ngrx/store";
import { INCREMENT } from "./counter.actions";

// Es buena practica crear un interface para el estado
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterReducer = createReducer(
  initialState,
  // Al llamarce a la accion increment...
  // Debe retornar el nuevo estado
  // El callback recibe el estado actual
  on(INCREMENT, (state: CounterState) => {
    return {
      ...state,
      value: state.value + 1,
    };
  }),
);
```

### Ejecutando las acciones

```ts
export class Clase16CounterComponent {
  value = 0;

  constructor(private store: Store<RootState>) {
    this.store.subscribe({
      next: (state) => {
        console.log(state);
        this.value = state.counter.value;
      },
    });
  }

  onIncrement() {
    // Disparamos el evento increment
    this.store.dispatch(INCREMENT());
  }

  onDecrement() {
    // Disparamos el evento decrement
    this.store.dispatch(DECREMENT());
  }
}
```

## Resumen

- Creamos un estado
- Creamos funciones para modificar ese estado en base al estado anterior (Reducers)
- Definimos los nombres de las acciones para utilizar los reducers
- En nuestro componente, llamamos y nos suscribimos al store para modificar valores dentro de nuestro componente en base al estado global

- [Documentación de NgRx](https://ngrx.io/guide/store)

### Selectors

- Dentro de nuestro `store` vamos a crear el archivo `counter.selectors.ts`

```ts
import { createFeatureSelector } from "@ngrx/store";

export const selectCounterState = createFeatureSelector("counter");
```

- Para llamar a este selector, dentro de nuestro componente debemos llamarlo desde la `store`
