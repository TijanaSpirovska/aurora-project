import { Component, OnInit } from '@angular/core';
import { CardItem } from '../../models/card/card.model';
import { DetailsCoreComponent } from '../../core/details-core';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.scss'],
})
export class CakeComponent extends DetailsCoreComponent {


  override initOther(): void {
    this.cardItems = [
      {
        id: 1,
        title: 'Chocolate Cake',
        price: 15.99,
        weight: 1000,
        url: 'assets/images/cake1.png',
        description: 'A delicious chocolate cake.',
        children: [],
      },
      {
        id: 2,
        title: 'Vanilla Cake',
        price: 12.99,
        weight: 800,
        url: 'assets/images/cake2.png',
        description: 'A delicious vanilla cake.',
        children: [],
      },
      {
        id: 3,
        title: 'Red velvet Cake',
        price: 18.99,
        weight: 1200,
        url: 'assets/images/cake3.png',
        description: 'A delicious red velvet cake.',
      },
      {
        id: 4,
        title: 'Carrot Cake',
        price: 13.99,
        weight: 900,
        url: 'assets/images/cake4.png',
        description: 'A delicious carrot cake.',
      },
      {
        id: 5,
        title: 'Lemon Cake',
        price: 14.99,
        weight: 1100,
        url: 'assets/images/cake2.png',
        description: 'A delicious lemon cake.',
      },
      {
        id: 6,
        title: 'Strawberry Cake',
        price: 16.99,
        weight: 1000,
        url: 'assets/images/cake3.png',
        description: 'A delicious strawberry cake.',
      },
      {
        id: 7,
        title: 'Carrot Cake',
        price: 13.99,
        weight: 900,
        url: 'assets/images/cake4.png',
        description: 'A delicious carrot cake.',
      },
      {
        id: 8,
        title: 'Lemon Cake',
        price: 14.99,
        weight: 1100,
        url: 'assets/images/cake2.png',
        description: 'A delicious lemon cake.',
      },
      {
        id: 9,
        title: 'Strawberry Cake',
        price: 16.99,
        weight: 1000,
        url: 'assets/images/cake3.png',
        description: 'A delicious strawberry cake.',
      },
    ];
  }
}
