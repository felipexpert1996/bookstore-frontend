import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-desktop-menu',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './desktop-menu.html',
  styleUrl: './desktop-menu.scss'
})
export class DesktopMenu {

}
