import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CartModel } from '../../model/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  protected items: CartModel[] = [];
  private cartSubject = new BehaviorSubject<CartModel[]>([]);

  cart$ = this.cartSubject.asObservable();

  addToCart(book: CartModel) {
    const existingBook = this.items.find(item => item.id === book.id);
    if (existingBook) {
      existingBook.quantity += book.quantity;
    } else {
      this.items.push(book);
    }
    this.cartSubject.next(this.items);
  }

  removeFromCart(bookId: string) {
    this.items = this.items.filter(item => item.id !== bookId);
    this.cartSubject.next(this.items);
  }

  clearCart() {
    this.items = [];
    this.cartSubject.next(this.items);
  }

  getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getItems(): CartModel[] {
    return this.items;
  }

  updateItem(cartItem: CartModel): CartModel[]{
    this.items.map((item)=>{
      if (item.id === cartItem.id){
        return cartItem;
      }
      return item;
    });
    return this.getItems();
  }
}
