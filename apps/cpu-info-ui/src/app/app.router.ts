import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpuInfoModuleModule } from '@treefood-nx-angular/cpu-info-module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false
    }),
    CpuInfoModuleModule
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
