import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../../features/dashboard/users/models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private VALID_TOKEN = '123456789';

  // Manejamos y accedemos a la información
  private _authUser = new BehaviorSubject<User | null>(null);

  // Este es el que nos permite acceder a la información
  authUser = this._authUser.asObservable();

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
    // this.router.navigate(['dashboard', 'courses']);
    localStorage.setItem('token', this.VALID_TOKEN);

    this._authUser.next({
      email: 'juan@gmail.com',
      password: '123456789',
      role: 'user',
    });

    this.router.navigate(['dashboard']);
  }

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

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['auth']);
  }

  // Verificamos el token
  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem('token');

    return of(this.VALID_TOKEN === token);
  }

  verifyRole() {
    const token = localStorage.getItem('token');

    if (token) {
      // Constulamos a la base de datos el token para que devuelve el usuario
      this._authUser.next({
        email: 'juan@gmail.com',
        password: '123456789',
        role: 'admin',
      });
    }

    return this._authUser;
  }
}
