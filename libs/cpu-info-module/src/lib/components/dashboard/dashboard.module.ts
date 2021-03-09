import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  CircleMeterModule,
  SemiEllipseMeterModule,
  VerticalMeterModule
} from '@treefood/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SemiEllipseMeterModule,
    VerticalMeterModule,
    MatCardModule,
    CircleMeterModule
  ]
})
export class DashboardModule {}
