import { Component } from '@angular/core';
import { DesktopMenu } from '../desktop-menu/desktop-menu';
import { MobileMenu } from '../mobile-menu/mobile-menu';

@Component({
  selector: 'app-menu',
  imports: [DesktopMenu, MobileMenu],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {

}
