# Clase 13 - Lazy loading de módulos y Guards

## Eager Loading vs Lazy Loading

**Eager Loading**

- "Carga ansiosa"
- Es la esetrategia de carga que tiene los componentes de Angular por defecto
- Carga todos los componentes en el `app.module` por primera vez

**Lazy Loading**

- "Carga perezosa o diferida"
- Es la estrategia de carga que tiene Angular cuando se utiliza el `routerLink` o cuando se utiliza la directiva `routerLinkActive`
- Se cargan cuando se necesiten los componentes
- Mejora el rendimiento y tiempos de carga

**Diferencias**

| Eager Loading                              | Lazy Loading                              |
| ------------------------------------------ | ----------------------------------------- |
| Existe una limitacion                      | Carga solo cuando se necesita             |
| Se tarda en disponibilizar los componentes | Se cargan cuando se necesiten             |
| Produce degradación en el UX               | Ahorra tiempo, hace que la app sea rápida |

## Lazy loading

**Implementación**

- Se llaman a los componentes desde las rutas
- Se elimina desde los modulos cada componente que se pueda cargar por medio de las rutas
- Se utiliza la propiedad `loadChildren` de la ruta

```ts
// app.routes.ts
{
  path: 'auth',
  loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule),
}
```

- Lo que hacemos es importar el módulo que queremos y llamar a su exportación
- `m`: Referencia al archivo
- Aunque lo hayamos configurado, no va a funcionar porque tenemos que definir las rutas del módulo

```ts
// auth-routing.module.ts
{
  path: 'login,
  component: LoginComponent,
},
```

## Guards y autenticación de usuarios

- Son middlewares que se ejecutan antes de cargar una ruta
- Determinan si se puede acceder a la ruta o no

**Hay 4 tipos que se pueden utilizar de forma combinada**

1. `CanActivate`: Antes de cargar los componentes de la ruta
2. `Can Deactivate`: Antes de intentar salir de la ruta (usualmente utilizado para evitar salir de una ruta si no se han guardado los datos)
3. `CanLoad`: Antes de cargar los recursos (assets) de la ruta
4. `CanActivateChild`: Antes de cargar las rutas hijas de la ruta actua: Antes de cargar las rutas hijas de la ruta actuall

- Si luego de la ejecución devuelve `true`, se carga la ruta
- Si devuelve `false`, se bloquea la ruta
- En caso de que no se cumpla la condición, se redirecciona a otra ruta

**Creación**

```bash
# Generalmente se guardan en la carpeta core/guards
ng g guard core/guards/auth
```

```ts
// auth.guard.ts

import { CanActivateFn } from "@angular/router";

// Anteriormente se usaban clases, hoy en dia se usan funciones
export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
```

**¿Cómo se aplica?**

- Dentro de la ruta, definimos la propiedad `canActivate`

```ts
{
  path: 'dashboard',
  canActivate: [authGuard],
  component: DashboardComponent,
  loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
}
```

- Aunque lo importamos, no va a funcionar porque dentro del Guard debe ir la lógica

```ts
// auth.guard.ts
export const authGuard: CanActivateFn = (route, state) => {
  // Obtenemos el token de la sesión
  const isAuthenticated = !!localStorage.getItem("token");

  // Inyectamos la dependencia de Router
  const router = inject(Router);

  if (isAuthenticated) {
    return true;
  }

  // Redireccionamos al login
  return router.createUrlTree(["auth"]);
};
```

- `GuardResult`: Es un tipo de Angular que debe retornar alguo de los tres tipos:
  - `boolean`: Indica si el guard es válido o no
  - `UrlTree`: Reiniciamos el árbol de rutas
  - `RedirectCommand`

`BehaviorSubject`: Es un objeto que se puede utilizar para emitir datos en un flujo de datos
