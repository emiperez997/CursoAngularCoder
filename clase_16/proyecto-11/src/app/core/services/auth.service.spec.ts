import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MockProvider } from 'ng-mocks';

describe('AuthService', () => {
  let service: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Evita efectos secundarios al invocar el router
      providers: [MockProvider(Router)],
    });

    // Para testear servicios
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Login test
  it('Al llamar login, debe redireccionar al dashboard', async () => {
    const spyOnNavigate = spyOn(router, 'navigate');

    service.loginObservable();

    expect(spyOnNavigate).toHaveBeenCalled();
  });
});
