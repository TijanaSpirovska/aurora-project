import { Component } from '@angular/core';
import { NAVBAR } from './data/navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  NAVBAR = NAVBAR;
}
