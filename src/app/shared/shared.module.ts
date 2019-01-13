import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent, RouterModule],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
