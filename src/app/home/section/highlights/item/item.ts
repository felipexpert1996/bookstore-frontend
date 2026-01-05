import { Component, inject, Input } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { MatButtonModule } from '@angular/material/button';
import { BookModel } from '../../../../model/book.model';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../../services/cart/cart';
import { CartModel } from '../../../../model/cart.model';

@Component({
  selector: 'app-item',
  imports: [NgOptimizedImage, MatButtonModule, CurrencyPipe, RouterModule],
  templateUrl: './item.html',
  styleUrl: './item.scss'
})
export class Item {
  @Input() item!: BookModel;

  private cartService: CartService = inject(CartService);

  addToCart(book: BookModel): void {
    const bookCartModel: CartModel = { 
      quantity: 1,
      ...book
    };
    this.cartService.addToCart(bookCartModel);
  }
}
