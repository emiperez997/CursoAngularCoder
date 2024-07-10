# Clase 8: Pipes y directivas personalizadas

## Pipes

- Convierten datos en la vista del componente (html)
- Su finalidad es que el usuario tengau una mejor experiencia
- Angular provee algunos por defecto como: `uppercase`, `lowercase`, `currency`, `date`, `json`

**Generar pipes personalizado**

- Creamos un pipe proyecto con Angular CLI

```bash
ng generate pipe pipes/my-pipe
```

```ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "myPipe",
})
export class MyPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
```

## Ejemplo en Clase

- Creamos un modulo llamado `shared`

```bash
ng g module shared
```

- Creamos un pipe llamado `reverse`

```bash
ng g p shared/pipes/reverse
```

- El debemos importarlo en el modulo shared

```ts
import { ReversePipe } from "./pipes/reverse.pipe";

@NgModule({
  declarations: [ReversePipe],
  imports: [CommonModule],
  exports: [ReversePipe],
})
export class SharedModule {}
```

- Llamamos al pipe en el componente

```html
<p>{{ "clase-pipes works!" | reverse }}</p>
```

- Dentro de nuestro pipe, debemos indicar qué es lo que deseamos hacer. En este caso es poner la palabra en reversa

```ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse",
})
export class ReversePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const reverse = value.split("").reverse().join("");

    return reverse;
  }
}
```

- El resultado debe ser `!licaf-se`

**Recursos**:

- [Angular pipes](https://angular.dev/guide/pipes)

También se pueden enviar argumentos a los pipes

```html
<p>{{ "clase-pipes works!" | reverse: "-" }}</p>
```

Podemos documentar con @JsDocs (Visual Studio Code)

```ts
export class ReversePipe implements PipeTransform {
  /**
   *  @param value: string
   *  @param args: unknown[]
   *
   *  @return: unknown
   * */
  transform(value: string, ...args: unknown[]): unknown {
    if (args.length > 0) {
      switch (args[0]) {
        case "lowercase":
          value = value.toLowerCase();
          break;
        case "uppercase":
          value = value.toUpperCase();
          break;
      }
    }

    const reverse = value.split("").reverse().join("");

    return reverse;
  }
}
```

## Directivas

- Angular nos permite crear directivas personalizadas
- Nos permite cambiar el comportamiento o la apariencia de un elemento

- Para crear una directiva podemos usar el clase-pipes

```bash
ng g directive resaltado
```

- Para usar una directiva debemos importarla en el modulo shared

```ts
import { ResaltadoDirective } from "./directives/resaltado.directive";

@NgModule({
  declarations: [ResaltadoDirective],
  imports: [CommonModule],
  exports: [ResaltadoDirective],
})
export class SharedModule {}
```

- Para usar la directiva debemos aplicarla a un elemento

```html
<p appResaltado>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
</p>
```

- Dentro de la directiva debemos definir el comportamiento

```ts
import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appResaltado]",
})
export class ResaltadoDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.background = "yellow";
  }
}
```

- También podemos hacer que la directiva reciba argumentos

```ts
import { Directive, ElementRef, Input, OnChanges } from "@angular/core";

@Directive({
  selector: "[appResaltado]",
})
export class ResaltadoDirective implements OnChanges {
  @Input() color: string = "yellow";

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.background = this.color;
  }

  ngOnChanges() {
    this.elementRef.nativeElement.style.background = this.color;
  }
}
```

```html
<p appResaltado color="red">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
</p>
```

## Directivas Estructurales

- Creamos una nueva directiva `repetir`

```bash
ng g directive shared/directives/repetir
```

- Creamos la lógica de nuestra directiva

```ts
import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appRepetir]",
})
export class RepetirDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<unknown>,
  ) {
    for (let i = 0; i < 10; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
```

- Para poder aplicarla a nuestro componente debemos utlizar el \*

```html
<p *appRepetir>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
</p>
```

- También, como en directivas normales, podemos recibir argumentos

```ts
@Input() appRepetir = 10;
```

> [!NOTE]
> Si ponemos el mismo nombre al argumento que a la directiva, podemos definir el parametro en la misma directiva

```html
<p *appRepetir="10">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
</p>
```

## Tips para el primer entregable
