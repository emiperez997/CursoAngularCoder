import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TableComponent } from '../../components/students/table/table.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    ToolbarComponent,
    SidenavComponent,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    TableComponent,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
