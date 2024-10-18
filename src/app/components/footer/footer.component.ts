import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  headerText: string = 'About Emporium Pies';
  descriptionText: string =
    'Emporium Pies is a modern American pie company devoted to making Fine Pie for Fine Folk in the Dallas/Fort-Worth area.';
  linkText: string = 'Quick Links';
  pageLogo: string = 'assets/images/page_logo.png';
  directLinks: { url: string; title: string }[] = [
    {
      url: '/home',
      title: 'Home',
    },
    {
      url: '/about-us',
      title: 'About us',
    },
    {
      url: '/cakes',
      title: 'Cakes',
    },
    {
      url: '/pastries',
      title: 'Pastries',
    },
  ];
}
