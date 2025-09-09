import { Component } from '@angular/core';
import { Catalog } from './section/catalog/catalog';
import { Highlights } from './section/highlights/highlights';

@Component({
  selector: 'app-home',
  imports: [Catalog, Highlights],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
