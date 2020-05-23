import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashboardModule, SettingsModule } from './components';

export const cpuInfoModuleRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, DashboardModule, SettingsModule]
})
export class CpuInfoModuleModule {}
