import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SearchField } from '../search-field/search-field';

@Component({
  selector: 'app-menu',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, SearchField],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
}
