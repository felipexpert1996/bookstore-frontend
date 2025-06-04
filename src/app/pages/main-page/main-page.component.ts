import { Component } from '@angular/core';
import { AsideComponent } from './aside/aside.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ReleaseComponent } from './release/release.component';

@Component({
  selector: 'app-main-page',
  imports: [AsideComponent, HighlightComponent, ReleaseComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
