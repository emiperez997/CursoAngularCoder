import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

interface ListItem {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatDividerModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  listItems: ListItem[] = [
    {
      name: 'Inicio',
      icon: 'home',
      url: '/inicio',
    },
    {
      name: 'Cursos',
      icon: 'school',
      url: '/cursos',
    },
    {
      name: 'Alumnos',
      icon: 'people',
      url: '/alumnos',
    },
    {
      name: 'Inscripciones',
      icon: 'add',
      url: '/inscripciones',
    },
  ];
}
