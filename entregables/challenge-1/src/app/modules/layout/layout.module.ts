import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    ToolbarComponent,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
