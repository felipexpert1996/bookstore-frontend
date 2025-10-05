import { TestBed } from '@angular/core/testing';

import { CartService } from './cart';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Cart', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created with default values', () => {
    expect(service.getTotalItems()).toEqual(0);
    expect(service.getTotalPrice()).toEqual(0);
  });

  it('should add item to cart', () => {
    service.addToCart({ id: '1', name: 'Book 1', price: 10, quantity: 1 });
    expect(service.getTotalItems()).toEqual(1);
    expect(service.getTotalPrice()).toEqual(10);
  });

  it('should remove item from cart', () => {
    service.addToCart({ id: '1', name: 'Book 1', price: 10, quantity: 1 });
    service.removeFromCart('1');
    expect(service.getTotalItems()).toEqual(0);
    expect(service.getTotalPrice()).toEqual(0);
  });

  it('should clear cart', () => {
    service.addToCart({ id: '1', name: 'Book 1', price: 10, quantity: 1 });
    service.addToCart({ id: '2', name: 'Book 2', price: 20, quantity: 2 });
    service.clearCart();
    expect(service.getTotalItems()).toEqual(0);
    expect(service.getTotalPrice()).toEqual(0);
  });

  it('should update quantity if item already exists in cart', () => {
    service.addToCart({ id: '1', name: 'Book 1', price: 10, quantity: 1 });
    service.addToCart({ id: '1', name: 'Book 1', price: 10, quantity: 2 });
    expect(service.getTotalItems()).toEqual(3);
    expect(service.getTotalPrice()).toEqual(30);
  });
});
