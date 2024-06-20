console.log("Hola Mundo");
console.log("Hola Mundo 2");

// Tipado implicito
let edad = 27; // number
let nombre = "Juan"; // string
let esSoltero = true; // boolean
let carro = null; // null
let frutas = ["manzana", "naranja", "limón", 123];

// Tipado explícito
let edad2: number = 27;
let nombre2: string = "Juan";
let esSoltero2: boolean = true;
let carro2: null = null;
let frutas2: string[] = ["manzana", "naranja", "limón"];

// Arrays de tipos diferentes
let frutasNumeros: (string | number)[] = ["manzana", "naranja", "limón", 123];

// Limitar la cantidad de elementos de un Arrays
// Tuplas
// Esto agrega validaciones en las posiciones
let miTupla: [string, number] = ["Juan", 27];
let sayanTupla: ["Goku" | "Vegeta"] = ["Goku"];

// Enums
enum Volumen {
  Bajo = 10,
  Medio = 50,
  Alto = 100,
}

let volumenActual: Volumen = Volumen.Medio;

console.log(volumenActual);

// Objetos e Interfaces
interface Usuario {
  nombre: string;
  edad: number;
  iniciarSesion: (email: string, password: string) => void;
}

let usuario: Usuario = {
  nombre: "Juan",
  edad: 27,
  iniciarSesion: (email: string, password: string) => {
    console.log("Iniciando sesión");
  },
};
