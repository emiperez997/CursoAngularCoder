import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from './modules/layout/layout.module';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ThemeService],
})
export class AppComponent implements OnInit {
  title = 'Platform Learning';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    const theme = this.themeService.getTheme();

    if (theme === 'dark' || theme === 'light') {
      this.themeService.setTheme(theme);
      return;
    }

    this.themeService.setTheme('light');
  }
}
