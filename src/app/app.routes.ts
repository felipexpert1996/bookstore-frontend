import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'about', component: AboutComponent}
];
