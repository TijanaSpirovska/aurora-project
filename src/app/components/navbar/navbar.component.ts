import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdown, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem } from '../../models/menu/menu-item.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdown, NgbDropdownMenu],
})
export class NavbarComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [{title:"Test",number:2}];

  constructor(

    private router: Router) {}

  ngOnInit(): void {
   
  }


  open(dropdown: NgbDropdown): void {
    dropdown.toggle();
  }

  close(dropdown: NgbDropdown): void {
    if (dropdown) {
      dropdown.close();
    }
  }

  onClick(): void {
    sessionStorage.removeItem('filters');
    sessionStorage.removeItem('filtersMenu');
  }
}
