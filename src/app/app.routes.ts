import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'detail/:id',
        loadComponent: () => import('./detail/detail').then(m => m.Detail)
    },
    {
        path: 'cart',
        loadComponent: () => import('./cart/cart').then(m => m.Cart)
    }
];
