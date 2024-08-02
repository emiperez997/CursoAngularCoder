# Clase 15 - Test Unitarios en Angular

## Testing

- Es un bloque de codigo que se encarga de testear que una parte de nuestra app funcione como se espera
- Permite probar lo que desarrollamos siguiendo los requerimientos para comprobar que funciona como deberia

## Metodologías

- Test Driven Development (TDD)

Esta mas cerca del diseño del sistema

1. Definimos los objetivos y escribimos su posible implementacion
2. Programamos el codigo paa pasar las pruebas
3. Podemos agregar nuevos casos de uso y refactorizar el codigo

- Behavior Driven Development (BDD)
  - Se basa en definir un lenguaje comun para el negocio
  - No es una tecnica, sino una estrategia similar a TDD

| TDD                                    | BDD                               |
| -------------------------------------- | --------------------------------- |
| El TDD hace foco en la prueba unitaria | Se centra en una prueba funcional |

## Distintas formas de hacer testing

- End to End (E2E)
  - Como se comporta la aplicacion completa
  - Se prueba el funcionamiento completo
- Integracion
  - Como se comporta la comunicacion entre componentes
  - Son pruebas donde interactuan dos o mas elementos para una tarea especifica
- Unitarias
  - Como se comporta cada componente individual
  - Son pruebas aisladas
  - Nos ayudan para probar rapidamente que todos los metodos funcionen
  - Se pueden escribir gran cantidad de pruebas rapidamente
  - Se peden someter a prubeas de estres

> [!NOTE]
> No es necesario testear todo el codigo, solo lo que se necesite

## Caso Practico

- Creamos una clase llamada `Robot`

```ts
export class Robot {
  piloto: string;

  constructor(piloto: string) {
    this.piloto = piloto;
  }

  initializeSystem() {
    console.log("Bienvenio, " + this.piloto);
  }
}
```

- Creamos un archivo `robot.class.spec.ts`. `spec` hace referencia a los tests

> [!NOTE]
> Angular ya tiene integrado frameworks de testing, por lo que no es necesario usar Jest o cualquier otro framework

`Jasmine`: Metodos comunes

- `beforeEach`: Se ejecuta antes de cada prueba
- `describe`: Se usa para agrupar pruebas
- `it`: Definicion de un test
- `expect`: Se usa para comparar valores
- `Matchers`: Son funciones que nos permiten comparar valores

```ts
import { Robot } from "./robot.class";

// describe -> agrupador
describe("Prueba sobre la clase robot", () => {
  // it -> prueba
  it("Al crear la instancia, debe realizar la asignacion de piloto", () => {
    // Logica para comprobar lo mencionado
    const robot = new Robot("Juan");
    expect(robot.piloto).toBe("Juan");
  });
});
```

- Ejecutamos el test

```bash
# Para ejecutar el test
ng test
```

- Dentro de WSL es necesario instala `google-chrome` para que funcionen los test

```bash
# Instalacion de google-chrome
sudo apt update
sudo apt install wget
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
sudo apt --fix-broken install
```

## Testear componentes

- En cada componente, se crea un archivo `spec.ts` que se encarga de probar el comportamiento del componente

```ts
// login.component.spec.ts
describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    // Configura un modulo de prueba
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        ReactiveFormsModule,
      ],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    // fixture: Contiene la instancia del componente (ComponentInstance)
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
```

```bash
# Nos permite ejecutar las pruebas unitarias
ng test --code-coverage
```

- El comando anterior, nos genera un archvio `coverage/lcov-report/index.html` que nos permite ver el porcentaje de cobertura de nuestro código

> [!NOTE]
> Dentro de angular existen Angular Mock que nos permite simular servicios propios de Angular

## Mocking Services

```ts
// products.service.spec.ts

...
providers: [provideHttpClientTesting()]
...

it("Llamar a un metodo http", async () => {
  const httpClient = TestBed.inject(HttpClient);
});
```
