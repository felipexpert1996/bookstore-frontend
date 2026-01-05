import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BookModel } from '../../model/book.model';
import { BOOKS } from '../../mock/books';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = '';
  private http = inject(HttpClient)
  
  getData(): Observable<BookModel[]> {
    // return this.http.get<BookModel[]>(this.apiUrl);
    return of(BOOKS);
  }

  getBooksById(ids: string[]): Observable<BookModel[] | undefined> {
    // return this.http.get<BookModel[]>(`${this.apiUrl}?ids=${ids.join(',')}`);
    const books = BOOKS.filter(book => ids.includes(book.id));
    return of(books);
  }
}
