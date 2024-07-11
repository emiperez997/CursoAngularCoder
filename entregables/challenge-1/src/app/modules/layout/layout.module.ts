import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    ToolbarComponent,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    SidenavComponent,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
