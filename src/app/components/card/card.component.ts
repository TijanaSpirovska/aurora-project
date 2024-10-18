import { Component,  Input } from '@angular/core';
import { CardItem } from '../../models/card/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  showText: boolean = false;
  
  @Input() cardItem!: CardItem;

  toggleText() {
    this.showText = !this.showText;
  }

}
