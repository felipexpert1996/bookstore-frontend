import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Detail } from './detail';
import { of } from 'rxjs';
import { provideZonelessChangeDetection } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book/book.service';
import { BookModel } from '../model/book.model';

const mockBooks: BookModel[] = [
  { id: '1', title: 'Angular Avançado', price: 100,  imageUrl: 'https://m.media-amazon.com/images/I/81tmn7qB-bL._UF1000,1000_QL80_.jpg', description: 'test description', author: 'author Test'} as BookModel,
  { id: '2', title: 'RxJS na Prática', price: 80, imageUrl: 'https://m.media-amazon.com/images/I/81tmn7qB-bL._UF1000,1000_QL80_.jpg', description: 'test description', author: 'author Test' } as BookModel
];

class MockBookService {
  getData() {
    return of(mockBooks);
  }
}

describe('Detail', () => {
  let component: Detail;
  let fixture: ComponentFixture<Detail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detail],
      providers: [
        provideZonelessChangeDetection(),
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        { provide: ActivatedRoute, useValue: { params: of({ id: '1' }) } },
        { provide: BookService, useClass: MockBookService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Detail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set itemId from route params', () => {
    expect(component.itemId).toBe('1');
  });

  it('should load the correct book based on itemId', () => {
    expect(component.book).toEqual(mockBooks[0]);
  });
});
