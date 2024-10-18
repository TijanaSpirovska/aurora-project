import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CakeComponent } from './cakes.component';

const routes: Routes = [
  {
    path: '',
    component: CakeComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CakeRoutingModule {}
