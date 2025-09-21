import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookModel } from '../../model/book.model';
import { BOOKS } from '../../mock/books';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = '';
  
  constructor(private http: HttpClient) {}
  
  getData(): Observable<BookModel[]> {
    // return this.http.get<Book[]>(this.apiUrl);
    return of(BOOKS);
  }
}
