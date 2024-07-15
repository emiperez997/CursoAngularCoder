import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../../../services/theme/theme.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  providers: [ThemeService],
})
export class ToolbarComponent {
  @Output() toggleEvent = new EventEmitter();

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.setTheme(
      this.themeService.getTheme() === 'dark' ? 'light' : 'dark',
    );
  }

  getTheme() {
    return this.themeService.getTheme();
  }
}
