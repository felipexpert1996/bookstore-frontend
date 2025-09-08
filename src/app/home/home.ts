import { Component } from '@angular/core';
import { Catalog } from './section/catalog/catalog';

@Component({
  selector: 'app-home',
  imports: [Catalog],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
