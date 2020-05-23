import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleMeterComponent } from './circle-meter.component';



@NgModule({
  declarations: [CircleMeterComponent],
  imports: [
    CommonModule
  ],
  exports: [CircleMeterComponent]
})
export class CircleMeterModule { }
