import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  // const isAuthenticated = !!localStorage.getItem('token');
  //
  // // Inyectamos la dependencia de Router
  // const router = inject(Router);
  //
  // if (isAuthenticated) {
  //   return true;
  // }
  //
  // // Redireccionamos al login
  // return router.createUrlTree(['auth']);

  // Ejemplo real
  const authService = inject(AuthService);
  console.log(authService);

  const router = inject(Router);

  return authService
    .verifyToken()
    .pipe(
      map((isAuthenticated) =>
        isAuthenticated ? true : router.createUrlTree(['auth']),
      ),
    );
};
