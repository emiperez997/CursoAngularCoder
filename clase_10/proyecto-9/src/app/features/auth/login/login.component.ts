import { Component, Inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APP_CONFIG } from '../../../core/injection-tokens';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    @Inject(APP_CONFIG) private appConfig: any,
  ) {
    console.log(this.appConfig);
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['admin', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return alert('Formulario no válido');
    }

    // this.authService.login();
    this.authService.loginObservable();
  }
}
