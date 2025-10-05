import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item } from './item';
import { LOCALE_ID, provideZonelessChangeDetection } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt-BR');

describe('Item', () => {
  let component: Item;
  let fixture: ComponentFixture<Item>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Item],
      providers: [provideZonelessChangeDetection(),
        { provide: ActivatedRoute, useValue: {} },
        { provide: LOCALE_ID, useValue: 'pt-BR' }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Item);
    component = fixture.componentInstance;
    component.item = { id: '1', title: 'book Test', author: 'author Test', description: 'test description', imageUrl: 'https://m.media-amazon.com/images/I/81tmn7qB-bL._UF1000,1000_QL80_.jpg', price: 9.99};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render book title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#title')?.textContent).toContain('book Test');
  });

  it('should render book author', () => {
    component.item = { id: '1', title: 'book Test', author: 'author Test', description: 'test description', imageUrl: 'https://m.media-amazon.com/images/I/81tmn7qB-bL._UF1000,1000_QL80_.jpg', price: 9.99};
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#author')?.textContent).toContain('author Test');
  });

  it('should render book price', () => {
    component.item = { id: '1', title: 'book Test', author: 'author Test', description: 'test description', imageUrl: 'https://m.media-amazon.com/images/I/81tmn7qB-bL._UF1000,1000_QL80_.jpg', price: 9.99};
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.querySelector('#price')?.textContent;
    const normalizedText = text?.replace(/\s/g, ' ').trim();
    expect(normalizedText).toBe('R$ 9,99');
  });

  it('should render book image', () => {
    component.item = { id: '1', title: 'book Test', author: 'author Test', description: 'test description', imageUrl: 'https://m.media-amazon.com/images/I/81tmn7qB-bL._UF1000,1000_QL80_.jpg', price: 9.99};
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('img')?.getAttribute('src')).toBe('https://m.media-amazon.com/images/I/81tmn7qB-bL._UF1000,1000_QL80_.jpg');
  });

  it('should call addToCart method when button is clicked', () => {
    spyOn(component, 'addToCart');
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button');
    button?.click();
    expect(component.addToCart).toHaveBeenCalledWith(component.item);
  });
});
