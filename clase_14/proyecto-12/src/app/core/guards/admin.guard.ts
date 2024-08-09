import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.verifyRole().pipe(
    map((user) => {
      console.log(user);

      if (!user) {
        return router.createUrlTree(['auth']);
      }

      if (user?.role !== 'admin') {
        return router.createUrlTree(['dashboard']);
      }

      return true;
    }),
  );
};
