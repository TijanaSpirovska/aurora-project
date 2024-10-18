import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PastriesComponent } from './pastries.component';

const routes: Routes = [
  {
    path: '',
    component: PastriesComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastriesRoutingModule {}
