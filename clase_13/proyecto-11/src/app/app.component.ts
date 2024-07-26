import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DashboardModule } from './features/dashboard/dashboard.module';
import { AuthModule } from './features/auth/auth.module';
import { AuthService } from './core/services/auth.service';
import { APP_CONFIG } from './core/injection-tokens';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AuthService],
})
export class AppComponent {
  title = 'proyecto-6';
}
