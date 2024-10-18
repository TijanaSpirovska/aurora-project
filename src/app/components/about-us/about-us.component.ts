import { Component, OnInit } from '@angular/core';
import { DetailsCoreComponent } from '../../core/details-core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent extends DetailsCoreComponent {

  bakerImg: string = 'assets/images/baker.png';
  title: string = 'Sweet Treats Bakery’s Story';
  descriptionText: string =
    'Well, cake there! Sweet Treats Bakery is a delightful haven dedicated to crafting exquisite cakes and pastries for every occasion. What began as a quaint little bakery nestled in a charming vintage cottage on Maple Street has blossomed into a beloved destination for dessert lovers throughout the city.  As co-owners and passionate bakers, we pour our hearts into every creation, constantly innovating to surprise and delight our guests with both delectable treats and warm hospitality. Consider this your invitation to indulge your senses—there’s truly something magical waiting for you here. With sweet wishes, Megan Thompson, Sarah Lee, and Rachel Kim.';
  flowerImg: string = 'assets/images/flowers.png';
  get paragraphs(): string[] {
    return this.descriptionText
      .split(/(?<=[.!?])\s+/)
      .filter((paragraph) => paragraph.trim() !== '');
  }
}
