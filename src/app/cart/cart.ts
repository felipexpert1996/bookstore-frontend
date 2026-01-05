import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart/cart';
import { CommonModule, CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { CartModel } from '../model/cart.model';
import { BookService } from '../services/book/book.service';
import { MaterializedCartModel } from './materialized-cart.model';
import { Subject, takeUntil } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, CommonModule, NgOptimizedImage, MatCardModule, MatAnchor, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart implements OnInit, OnDestroy {

  private cartService: CartService = inject(CartService);
  public cart: CartModel[] = [];

  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.cartService.cart$
      .pipe(takeUntil(this.destroy$))
      .subscribe(cartItems => {
        this.cart = cartItems;
      });
  }

  removeItem(bookId: string) {
    this.cartService.removeFromCart(bookId);
  }

  trackById(_: number, item: MaterializedCartModel) {
    return item.id;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addQuantity(quantity: number, bookId: string): void {
    const item = this.cart.find((item) => item.id === bookId);
    if(item && item.quantity < 100){
      item.quantity += quantity;
    }
  }

  removeQuantity(quantity: number, bookId: string): void {
    const item = this.cart.find((item) => item.id === bookId);
    if(item && item.quantity > 1){
      item.quantity -= quantity;
    }
  }
}
