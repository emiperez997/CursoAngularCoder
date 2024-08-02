import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
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

  it('El campo email debe ser requerido', () => {
    const emailControl = component.loginForm.get('email');

    emailControl?.setValue('');

    expect(component.loginForm.get('email')?.invalid).toBeTruthy();
  });

  it('Al llamar onSubmit, si el formlario es invalido, debe mostrar un alerta', async () => {
    const loginForm = component.loginForm;

    loginForm.setValue({
      email: '',
      password: '',
      role: '',
    });

    // Definimos un espía para el metodo alert
    const spyOnAlert = spyOn(window, 'alert');

    component.onSubmit();

    expect(spyOnAlert).toHaveBeenCalledWith('Formulario no válido');
  });

  it('Al llamar onSubmit, si el formlario es valido, debe llamar al método authService.login', async () => {
    const loginForm = component.loginForm;

    loginForm.setValue({
      email: 'juan@gmail.com',
      password: '123456789',
      role: 'user',
    });

    // Definimos un espía para el método authService.login
    const spyOnLogin = spyOn(component.authService, 'loginObservable');

    component.onSubmit();

    expect(spyOnLogin).toHaveBeenCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
