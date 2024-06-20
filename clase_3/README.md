# Clase 3: TypeScript

## Definamos Node.js

- Node.js es un entorno de ejecución de JavaScript que se ejecuta en el servidor
- Nos permite crear un servidor de desarrollo para gestionar librerías y módulos
- Se ejecuta en el servidor y no en el navegador
- Hasta ahora utilizamos Npm (Node Package Manager) para instalar librerías

## Proyecto en TypeScript

- Creamos la carpeta

```bash
mkdir proyecto-ts
```

- Inicializamos nuestro proyecto con Node

```bash
# Nos crea el archivo package.json
npm init -y
```

`package.json`: Archivo de configuración de Npm

```json
{
  "name": "proyecto-ts",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  // Comandos de script
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    "start": "node index.js
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

- Creamos el archivo `index.js`

```js
console.log("Hola Mundo");
```

- Corremos nuestro proyecto con `npm start`

```bash
npm start
```

## TypeScript

- Es un lenguaje de código abierto creado por Microsoft
- Es un superset (que es un conjunto de tipos) de JavaScript
- Al compilar, se genera cóigo JavaScript porque el navegador no puede entender TypeScript

> [!NOTE]
> JavaScript es un lenguaje interpretado, mientras que TypeScript es un lenguaje compilado

**Ventajas**

- Extiende el lenguaje JavaScript
- Ofrece tipado estricto y flexible
- Mejora la legibilidad del código
- Permite usar nuevas características de JavaScript y trabajar con POO

## Probando TypeScript

- Instalamos TypeScript

```bash
npm install -g TypeScript
# o
npm install typescript
```

- Creamos un archivo `.ts` y escribimos el código de nuestro proyecto-ts

```ts
touch index.ts
```

- Chequear la version de typescript

```bash
tsc --version
# o
npx tsc --version
```

- Creamos la configuración de compilación

```bash
npx tsc --init
```

`tsconfig.json`: Archivo de configuración de typescript
`compilerOptions`: Opciones de compilación
`outDir`: Directorio de salida. Generalmente se configura en `dist`

- Traspilar el archivo `index.ts` a `index.js`

```bash
# Especificar el archivo ignora el tsconfig.json
npx tsc index.ts

# Para usar la configuracion del tsconfig.json
npx tsc

# Para dejar escuchar el archivo de salida
npx tsc --watch
```

- Dentro del `package.json` debemos actualizar el script `start`

```json
"start": "node dist/index.js"
```

- Ejecutamos nuestro proyecto con `npm start`

```bash
npm start
```

## Características de typescript

- Tipos Primitivos

  - `string`
  - `number`
  - `boolean`
  - `null`
  - `undefined`
  - `any`

> [!NOTE]
> Los errores de tipos los vamos a ver en tiempo real mientras escribimos el código

```ts
let edad = 27; // number
let nombre = "Juan"; // string
let esSoltero = true; // boolean

let frutas: string[] = ["manzana", "naranja", "limón"];
```

`Enums`: Tipo de datos que representa un conjunto de valores.

```ts
enum Volumen {
  Bajo = 10,
  Medio = 50,
  Alto = 100,
}
```

`Objetos`: Para tipar objetos debemos utilizar interfaces
`Interfaces`: Son un contrato que nos permite definir los campos que debemos tener en un objeto.

```ts
interface Usuario {
  nombre: string;
  edad: number;
  ininicarSesion: (email: string, password: string) => void;
}

let usuario: Usuario = {
  nombre: "Juan",
  edad: 27,
  ininicarSesion: (email: string, password: string) => {
    console.log("Iniciando sesión");
  },
};
```

`Never`: Tipo de datos que no puede ser utilizado

`Clases`: Tipo de datos que representa un objeto.

```ts
class Producto {
  nombre: string;
  precio: number;
}

let producto: Producto = {
  nombre: "Producto",
  precio: 10,
};
```

`Genericos`: Tipo de datos que se utiliza para definir un tipo de datos que puede ser utilizado en varios contextos.

```ts
class Paginacion<T> {
  total: number;
  items: T[];
}

let paginacion: Paginacion<Producto> = {
  total: 10,
  items: [producto],
};

let paginacion2: Paginacion<string> = {
  total: 10,
  items: ["Producto"],
};
```

`Recursos`

- [Principios SOLID](https://profile.es/blog/principios-solid-desarrollo-software-calidad/)
