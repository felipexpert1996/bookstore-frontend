import { Component } from '@angular/core';
import { AsideComponent } from './aside/aside.component';
import { HighlightComponent } from './highlight/highlight.component';

@Component({
  selector: 'app-main-page',
  imports: [AsideComponent, HighlightComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
