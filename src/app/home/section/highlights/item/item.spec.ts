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
});
