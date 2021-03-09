import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { ListNavigationModule } from '@treefood/common';
import { PipesModule } from '../../dal';
import { BetterTermPipe } from '../../dal/pipes/better-term.pipe';
import { DeviceComponent } from './device/device.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [SettingsComponent, DeviceComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatCheckboxModule,
    MatCardModule,
    ListNavigationModule,
    RouterModule,
    MatListModule,
    PipesModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  providers: [BetterTermPipe]
})
export class SettingsModule {}
