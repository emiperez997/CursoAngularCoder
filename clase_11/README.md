# Clase 11: Router

## Router en Angular

- Angular trabaja con SPA (Single Page Application)
- Trabaja sobre un sólo archivo `index.html`
- Todas las vistas se muestran sobre el `index.html` intercambiando el componente que se esté visualizando en cada momento
- El enrutamiento en Angular nos ayuda a navegar de una vista a otra

```ts
import { RouterModule, Routes } from "@angular/router";
```

- Como generar una aplicación aplicando routing

```bash
ng new my-app --routing
```

- Configurar un enrutador

```ts
const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
];
```

- En el `app.module.ts` debemos importar el módulo `RouterModule` y agregarlo a la lista de importaciones

```ts
import { RouterModule, Routes } from "@angular/router";

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppModule {}
```

`forRoot`: Declara la raíz de nuestro árbol de rutas
`forChild`: Declara las rutas hijas

- Para mostrar la pantalla de la ruta debemos agregar la ruta a la lista de rutas

```ts
const routes: Routes = [
  {
    path: "auth",
    component: LoginComponent,
  },
];
```

- Dentro del app.component debemos agregar la etiqueta `router-outlet` para mostrar la ruta

```html
<router-outlet></router-outlet>
```

- En algunos casos, necesito importar los servicios del componente

## Servicio Router

- Podemos navegar dentro de nuestro HTML utilizando la directiva `routerLink`

```html
<button routerLink="/dashboard">Dashboard</button>
```

- También podemos definir rutas dentro de otras rutas con la propiedad `children`

```ts
const routes: Routes = [
  {
    path: "auth",
    component: LoginComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "courses",
        component: CoursesComponent,
      },
    ],
  },
];
```

> [!NOTE]
> Las rutas pueden ser relativas con el routerLink si no le pongo la / al inicio

- Para marcar una ruta como la activa, debemos utilizar el `routerLinkActive`

```html
<!-- dashboard.component.html -->
<a mat-list-item routerLink="/dashboard" routerLinkActive="active">Inicio</a>

<!-- dashboard.component.scss -->
.active { color: red; background: yellow; }
```

## Pasaje de parámetros

- Parametros de URL: `/dashboard/students/2`
- Parametros de Consultas: `/dashboard/students?page=2&size=10`

- Dentro de app.routes.ts definimos la ruta con los parametros

```ts
{
  // :id es un parámetro
  path: 'courses/:id',
  component: CourseDetailComponent,
}
```

- Dentro de nuestro componente agregamos un botón para acceder a la rutas

```html
<!-- courses.component.html -->
<!-- Solo le pasamos el id, ya que usamos la ruta relativa -->
<button mat-icon-button [routerLink]="element.id">
  <mat-icon>visibility</mat-icon>
</button>
```

> [!NOTE]
> Es necesario importar el módulo `RouterModule` en el módulo de nuestro componente

- Obtenemos el id de la url con `activatedRoute`

```ts
// course-detail.component.ts
constructor(private courseService: CoursesService, private activatedRoute: ActivatedRoute) {
  // Obtengo el id de la url
  const id = this.activatedRoute.snapshot.paramMap.get('id');
  this.curso$ = this.courseService.gtCourseById(id);
}
```

- En el html mostramos el nombre del curso

```html
<h2>Curso de: {{ (curso$ | async)?.title }}</h2>
```

- Podemos redireccionar desde un componente

```ts
// login.component.ts
login() {
  // Hacemos una petición al backend de login
  fetch(...)

  // Seteamos el token en localStorage
  localStorage.setItem('token', token);

  // Redireccionamos al usuario
  // Se puede pasar un objeto como segundo parámetro
  this.router.navigate(['dashboard', 'courses']);
}
```
