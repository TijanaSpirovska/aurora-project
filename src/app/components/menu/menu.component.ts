import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { MenuItem } from '../../models/menu/menu-item.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() menuTitle: string = '';
  @Input() menuItems: MenuItem[] = [{}];
  @Input() autoWidth: boolean = false;
  @Input() marginLeft: boolean = true;
  @Input() hasBreadcrumb: boolean = false;

  constructor(
    private location: Location,
  ) {}

  ngOnInit(): void {}

  onBack(): void {
    this.location.back();
  }
}
