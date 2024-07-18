import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  async login() {
    console.log('Original Login');

    console.log(this.getUserPromise());

    // this.getUserPromise()
    //   .then((user) => {
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    try {
      const user = await this.getUserPromise();

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  async loginObservable() {
    // this.getUserObservable().subscribe({
    //   next: (user) => {
    //     console.log(user);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    //   complete: () => {
    //     console.log('Completado');
    //   },
    // });

    // Hacemos una petición al backend de login
    // fetch(...)

    // Seteamos el token en localStorage
    // localStorage.setItem('token', token);

    // Redireccionamos al usuario
    this.router.navigate(['dashboard', 'courses']);
  }

  verifyToken() {}

  getCurrentUser() {}

  /**
   * Ejemplo Promesas y Observables
   */

  getUserPromise(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: 'Juan',
          email: 'juan@gmail.com',
        });
      }, 2000);
    });
  }

  getUserObservable(): Observable<any> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next({
          id: 1,
          name: 'Juan',
          email: 'juan@gmail.com',
        });

        observer.error('Uknown error'); // Este error corta la función
        observer.complete(); // Este complete corta la función
      }, 2000);
    });
  }
}
