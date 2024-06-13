# Clase 2: Componentes y Elementos de un proyecto Angular

## Análisis de estructura

> [!NOTE]
> La tarea del armado de la estructura y configuración del proyecto se encarga el CLI

`Repaso`:

1. Creación de un proyecto: `ng new <`nombre-del-proyecto> --no-standalone`

   - `--no-standalone`: Crea un proyecto de la forma tradicional
   - Nos pregunta que lenguaje queremos usar como lenguaje de estilos (Elegimos SCSS)

2. Ingresar a nuestro proyecto: `cd <nombre-del-proyecto>`

3. Iniciar el servidor: `ng serve -o`

   - `-o`: Especificamos que queremos que el servidor se ejecute en modo `open` (abrir en el navegador)
   - `--port=8000`: Especificamos que queremos que el servidor se ejecute en el puerto `8000`

**Estructura del proyecto**

Archivos de configuración:

- `node_modules`: Archivos de dependencias
- `.editorconfig`: Configuración de formato de código del editor
- `.gitignore`: Configuración de archivos que no se deben subir al repositorio
- `angular.json`: Configuración del proyecto de Angular (Lenguaje de estilos, build), etc.)
- `package-lock.json`: Archivos de dependencias detalladas
- `package.json`: Configuración de dependencias y scripts
- `README.md`: Archivo de documentación
- `tsconfig.app.json`: Archivo de configuración de Typescript
- `tsconfig.json`: Archivo de configuración de Typescript
- `tsconfig.spec.json`: Archivo de configuración de Typescript

Carpeta `src`: Contiene todos los recursos del proyecto

- `index.html`: Archivo donde se renderiza el contenido de la página
  - `<app-root></app-root>`: Donde se va a renderizar toda nuestra app
- `main.ts`: Configuración de la aplicación
- `styles.scss`: Estilos globales
- `app`: Carpeta del módulo principal de la aplicación
  - `app.module.ts`: Archivo de módulo. Un Módulo es una clase de TypeScript que define la configuración de un segmento específico de nuestra app. `AppModule` es el módulo raíz de mi aplicación
  - `app.component.ts`: Componente app. Es mi componente padre/semilla/princip al. Cada componente que yo cree, nace de este componente.
  - `app.component.html`: Archivo HTML de mi componente app.
  - `app.component.scss`: Archivo de estilos de mi componente app.
  - `app.component.spec.ts`: Definición de los tests de mi componente app.
  - `app.routing.module.ts`: Módulo de rutas de mi componente app.

## Componentes

Los componentes representa una porción de la apicación. Se segmenta en la interfaz y la lógica por separado.

- `app.component.html`: Se encarga de la interfaz de usuario
- `app.component.ts`: Se encarga de la lógica de dicha interfaz

## Definir funciones en nuestros componentes

- Debemos definir la función dentro del archivo `app.component.ts`

```ts
export class AppComponent {
  title = "proyecto-2";

  mostrarCursos() {
    console.log("Mostrando cursos");
  }
}
```

- Luego llamamos a la función en el archivo `app.component.html`

```html
<button (click)="mostrarCursos()">Mostrar cursos</button>
```

**Separación dentro del componente**

- `TypeScript`: Lógica
- `HTML`: Interfaz
- `SCSS`: Estilos
- `SPEC`: Tests

## Creación de componentes

- Creamos una carpeta llamada `components`

- Luego utilizamos el cli para generar un componente `ng g c componentes/my-header`
  - `g`: Generar
  - `c`: Componente
  - `componentes/my-header`: Nombre del componente

Flags de generación:

- `--inilne-style`: No genera el archivo de estilos (SCSS)
- `--inline-template`: Genera el HTML dentro del archivo de componentes
- `--skip-tests`: No genera el archivo de tests

## Ejercicio

Crear los siguientes componentes:

- `app-toolbar`: Un header a lo ancho de la página
- `app-navbar`: Un sidebar que se encuentre a la izquierda
- `app-students`: Un componente que muestre los estudiantes de la universidad
