import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './components/home/home-routing.module';
import { AboutUsRoutingModule } from './components/about-us/about-us-routing.module';
import { CakeRoutingModule } from './components/cakes/cakes-routing.module';
import { PastriesRoutingModule } from './components/pastries/pastries-routing.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => HomeRoutingModule,
      },
      {
        path: 'about-us',
        loadChildren: () => AboutUsRoutingModule,
      },
      {
        path: 'cakes',
        loadChildren: () => CakeRoutingModule,
      },
      {
        path: 'pastries',
        loadChildren: () => PastriesRoutingModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
