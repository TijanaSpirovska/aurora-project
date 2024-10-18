import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { CakeComponent } from './components/cakes/cakes.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CardComponent } from './components/card/card.component';
import { PastriesComponent } from './components/pastries/pastries.component';
import { DetailsCoreComponent } from './core/details-core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    HeaderComponent,
    CakeComponent,
    HomeComponent,
    AboutUsComponent,
    FooterComponent,
    CardComponent,
    PastriesComponent,
    DetailsCoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    BreadcrumbModule,
    RouterModule,
  ],
  exports: [NgbModule, NgbDropdownModule, BreadcrumbModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
