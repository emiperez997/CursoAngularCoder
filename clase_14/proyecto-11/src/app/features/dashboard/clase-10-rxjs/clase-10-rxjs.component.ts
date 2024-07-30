import { Component, OnDestroy } from '@angular/core';
import {
  Observable,
  Subscription,
  delay,
  filter,
  forkJoin,
  interval,
  map,
  of,
  take,
} from 'rxjs';
import { CoursesService } from '../../../core/services/courses.service';
import { Course } from '../courses/models';

@Component({
  selector: 'app-clase-10-rxjs',

  templateUrl: './clase-10-rxjs.component.html',
  styleUrl: './clase-10-rxjs.component.scss',
})
export class Clase10RxjsComponent implements OnDestroy {
  myRandomNumberSuscription?: Subscription;

  // Definimos un Observable
  // Se utiliza el $ como buena práctica
  myRandomNumber$ = new Observable<number>((suscriber) => {
    // Se puede enviar más de un valor
    let counter = 0;
    setInterval(() => {
      // suscriber.next(Math.random());
      counter++;
      suscriber.next(counter);
    }, 2000);

    // suscriber.next(Math.random());
  });

  // Definimos cada cuantos segundos se ejecutará el observable
  // Otra forma un observable que devuelva un numero
  myInterval$ = interval(1500);

  // of: Crea un observable en base al valor que pongamos dentro de la función
  obtenerNombreUsuarios$ = of('Mariano').pipe(delay(1000));

  valorContador = 0;

  loading = false;
  cursos$: Observable<Course[]>;

  // Es buena practica usar el of
  profesores$: Observable<string[]> = of([
    'Juan',
    'Maria',
    'Pedro',
    'Ana',
  ]).pipe(delay(3000));

  cursos: Course[] = [];
  profesores: string[] = [];

  constructor(private courseService: CoursesService) {
    // Esta suscripción se ejecuta cada vez que se inicialice el componente
    // Obtenemos la referencia de la suscripción
    // this.myRandomNumberSuscription = this.myRandomNumber$
    // this.myRandomNumberSuscription = this.myInterval$
    //   .pipe(
    //     // take(10),
    //     // filter((value) => value > 5),
    //     map((value) => value * 2),
    //   )
    //   .subscribe({
    //     // Recibimos un valor sin errores
    //     next: (value) => {
    //       // value: Lo que se envíe por next
    //       console.log(value);
    //       this.valorContador = value;
    //     },
    //     // Cuando el Observable emite un error
    //     error: (error) => {},
    //     // Cuando el Observable finaliza. Deja de emitir valores
    //     complete: () => {},
    //   });
    //
    // this.obtenerNombreUsuarios$.subscribe({
    //   next: (value) => {
    //     console.log(value);
    //   },
    // });
    this.cursos$ = courseService.getCourses();

    this.loading = true;
    // this.cursos$.pipe(delay(2000)).subscribe({
    //   next: (cursos) => {},
    //   complete: () => {
    //     this.loading = false;
    //   },
    // });

    // this.profesores$.subscribe({
    //   next: (profesores) => {},
    //   complete: () => {
    //     this.loading = false;
    //   },
    // });

    forkJoin([this.cursos$, this.profesores$]).subscribe({
      next: ([cursos, profesores]) => {
        this.cursos = cursos;
        this.profesores = profesores;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  ngOnDestroy() {
    // Dentro de esta función se deben limpiar los eventos y suscripciones
    // Cuando se destruye el componente se destruye la suscripción
    this.myRandomNumberSuscription?.unsubscribe();
  }
}
