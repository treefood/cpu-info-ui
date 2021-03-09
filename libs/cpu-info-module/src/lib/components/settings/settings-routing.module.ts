import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceComponent } from './device/device.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
    pathMatch: 'full'
  },

  {
    path: 'settings/device/:device_id',
    component: DeviceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
