import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ListNavigationComponent } from './list-navigation.component';

@NgModule({
  declarations: [ListNavigationComponent],
  imports: [CommonModule, MatListModule, MatIconModule],
  exports: [ListNavigationComponent]
})
export class ListNavigationModule {}
