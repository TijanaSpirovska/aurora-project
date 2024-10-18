import { Component, OnInit } from '@angular/core';
import { CardItem } from '../models/card/card.model';

@Component({
  template: '',
})
export class DetailsCoreComponent implements OnInit {
  cardItems: CardItem[] = [];

  ngOnInit(): void {
    this.scrollToTop();
    this.initOther();
  }

  initOther(): void {}

  scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
  }
}
