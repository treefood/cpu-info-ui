import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BetterTermPipe } from './better-term.pipe';
import { UnitPipe } from './unit.pipe';

@NgModule({
  declarations: [UnitPipe, BetterTermPipe],
  exports: [UnitPipe, BetterTermPipe],
  imports: [CommonModule]
})
export class PipesModule {}
