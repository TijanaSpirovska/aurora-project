import { Component, OnInit} from '@angular/core';
import { DetailsCoreComponent } from '../../core/details-core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends DetailsCoreComponent {
  firstLayer: string = 'assets/images/first_layer.png';
  secondLayer: string = 'assets/images/second_layer.png';
  middleLayer: string = 'assets/images/middle_layer.png';
  bakery: string = 'assets/images/bakery.png';
  bakeryLocation: string = 'assets/images/bakery_location.png';
  text1: string = 'Sweet Freedom:';
  text2: string = 'Gluten-Free Cakes & Pastries That Delight Every Bite';
  text3: string = 'Come see us!';
  text4: string = 'The Emporium Pies team is  ';
  text5: string = 'slinging pie all across Dallas.';
  reviews: { text: string; source: string }[] = [
    {
      text: 'It’s hard not to fall in love with the charming pies at this adorable shop.',
      source: 'D Magazine',
    },
    { text: 'Best pumpkin pie in the entire world.', source: 'Pie Fanatics' },
    { text: 'Best Dessert 2023', source: 'Food Awards' },
    {
      text: 'It’s hard not to fall in love with the charming pies at this adorable shop.',
      source: 'D Magazine',
    },
    {
      text: 'I do not like apple pie,  Tons of apples cooked just right. Just a mound full of happiness.',
      source: 'Apple Pie Lover',
    },
    {
      text: 'It’s hard not to fall in love with the charming pies at this adorable shop.',
      source: 'D Magazine',
    },
  ];
}
