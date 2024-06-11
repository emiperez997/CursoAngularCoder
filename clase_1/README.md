# Clase 1

## Proyecto Final

- Un proyecto de gestión de inscripción de alumnos a cursos
  - Perfil administrador
    - Listar
    - Realizar altas y bajas
    - Inscribir o anular inscripciones
  - Perfil de usuario
    - Listar estudiantes y cursos
    - Inscribir o anular inscripciones

## ¿Qué es Angular?

Angular es un framework de desarrollo web que permite crear aplicaciones web de manera sencilla y rápida.

Trabaja con el concepto de SPA (Single Page Application) y se basa en la idea de que cada página web se carga de forma individual y no se recargan los datos de la página anterior.

## Angular vs AngularJS

> A AngularJS se lo considera obsoleto

Angular se distingue de la utilización de inyección de dependencias que impulsa el rendmiento de la aplicación. Tiene una curva de aprendizaje bastante alta al principio, pero luego de dominarlo tiene todo lo necesario para construir aplicaciónes en el menor tiempo posible.

> Angular nos ofrece desarrollo de principio a fin sin salir del ecosistema

## Alcance de Angular

**Cuando usar Angular**

- App web dinámicas: Muestra el contenido según el usuario que está accediendo el cliente que está consumiendo
- App web de nivel empresarial: Reutiliza componentes, módulos y bibliotecas externas
- SPA
- PWA (Progressive Web App)

**Cuando no usar Angular**

- Contenido estático
- Microservicios

## Herramientas

- Angular CLI
- Editor de Código: Neovim
- Navegador: Edge
- Terminal: Wezterm
- Node y NPM: nvm

## Angular CLI

- Debemos instalar la linea de comandos globalmente. Esto se instala una sola vez

```bash
npm install -g @angular/cli
```

## Crear nuestro primer proyecto

```bash
ng new primer-proyecto

# --no-standalone: Crea un proyecto de la forma tradicional
ng new primer-proyecto --no-standalone

# Correr el proyectos
ng serve -o

# Especificando un puerto
ng serve -o --port=8000
```

- SCSS: Está pensado para usar en proyectos de Angular. Usa CSS normal pero con un estilo más limpio
- SSR y SSG: Servicio de Renderizado y Generación de Contenido. Hace referncia a la generación de páginas web dinámicas.

Para modificar lo que se muestra en la página principal, debemos acceder al archivo `app.component.html`.

```html
<h1>Hola Mundo</h1>
```
