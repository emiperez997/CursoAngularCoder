import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  getTheme() {
    const theme = localStorage.getItem('theme');
    return theme;
  }

  setTheme(theme: 'light' | 'dark') {
    localStorage.setItem('theme', theme);
    document.getElementsByTagName('html')[0].className = theme;
  }
}
