import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';

import { SearchField } from '../search-field/search-field';
import { RouterLink } from '@angular/router';
import { CartModel } from '../../model/cart.model';
import { CartService } from '../../services/cart/cart';

@Component({
  selector: 'app-menu',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, SearchField, RouterLink, MatBadgeModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu implements OnInit {

  cart: CartModel[] = [];
  totalItems = 0;

  private cartService: CartService = inject(CartService);

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
      this.totalItems = this.cartService.getTotalItems();
    });
  }

  clearCart() {
    this.cartService.clearCart();
  }

  removeFromCart(bookId: string) {
    this.cartService.removeFromCart(bookId);
  }
}
