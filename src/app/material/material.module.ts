import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
const material = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule

];
@NgModule({
  // declarations: [],
  imports: [
    // CommonModule
    material,
  ],
  exports: [material],
})
export class MaterialModule { }
