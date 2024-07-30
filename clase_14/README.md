# Clase 14 - Llamadas a API Rest

**¿Qué es una API Rest?**

- Una API Rest es un servicio web que nos permite acceder a datos
- Es un conjunto de protocolos y definiciones
- _REST_: Representational State Transfer
- _API_: Application Programming Interface

Cliente -> API REST -> Base de datos

## Métodos HTTP

- GET: Solicita datos
- POST: Crea datos
- PUT: Actualiza datos
- DELETE: Elimina datos

## Serviocos Mock

- Nos proveen datos de ejemplo que simulan dependencias externas

**Recursos**

- [Mockapi](https://mockapi.io/)
- [Json Server](https://npmjs.com/package/json-server)
- [Reqres](https://reqres.in/)

## Utilizando Json Server

- Instalamos Json Server

```bash
npm install -g json-server
```

- Creamos un archivo `db.json`

```json
{
  "cursos": [
    {
      "id": "BE-1",
      "title": "NestJs",
      "description": "Curso de Nestjs",
      "status": "Pendiente",
      "startDate": "2024-07-01T00:00:00.000Z",
      "endDate": "2024-07-01T00:00:00.000Z"
    },
    {
      "id": "FE-1",
      "title": "Angular",
      "description": "Curso de Angular",
      "status": "Pendiente",
      "startDate": "2024-07-01T00:00:00.000Z",
      "endDate": "2024-07-01T00:00:00.000Z"
    },
    {
      "id": "BBDD-1",
      "title": "SQL",
      "description": "Curso de Bases de Datos",
      "status": "Pendiente",
      "startDate": "2024-07-01T00:00:00.000Z",
      "endDate": "2024-07-01T00:00:00.000Z"
    }
  ]
}
```

- Usamos el comando `json-server` para crear un servidor de datos

```bash
json-server --watch db.json
```

- Esto nos levanta un servidor en el puerto `3000`

## Consultando la API

- Angular provee el modulo de `HttpClient`
- Este proveedor debemos importarlo en app.config.ts, en el array de providers
- Luego se inyecta dentro del servicio que queramos utilizar

```ts

getCourses(): Observable<Course[]> {
  return this.http.get('https://localhost:3000/courses');
}
```

## Entornos

- Para generar entornos en angular, debemos usar el CLI

```bash
ng g environment
```

- Esto genera una carpeta `environments` en la raíz del proyecto donde podemos definir nuestras variables de entorno
- Dentro de esa carpeta crea dos archivos: `environment.ts` y `environment.development.ts`

```ts
// environment.ts
export const environment = {
  apiUrl: "https://my-api.com",
};

// environment.development.ts
export const environment = {
  apiUrl: "http://localhost:3000",
};
```

- Por defecto, Angular usará el archivo `environment.ts`, pero al utilizar el entorno de desarrollo, cambia el archivo

```json
// anuglar.json
"development": {
  // ...
  "fileReplacements": [
    {
      "replace": "src/environments/environment.ts",
      "with": "src/environments/environment.development.ts"
    }
  ]
}
```

- Para ejecutar el entorno de producción debemos agregar el flag `--configuration production` al comando `ng serve`

```bash
ng serve --configuration production
```

- También podemos crear una build de producción

```bash
# Lo que esté dentro de la carpeta build es lo que se va a publicar
ng build --configuration production
```
