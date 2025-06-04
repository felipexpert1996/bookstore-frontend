import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { BooksService } from '../../../services/books.service';
import { Subscription } from 'rxjs';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  imports: [NgOptimizedImage, CommonModule],
  styleUrl: './highlight.component.scss'
})
export class HighlightComponent implements OnDestroy, OnInit {
    private subscriptions: Subscription[] = [];
    private books: Book[] = [];
    public highlightBook: Book | undefined;
  
    constructor(private bookService: BooksService){
    }
  
    ngOnDestroy(): void {
      this.subscriptions.forEach(item=>item.unsubscribe());
    }
  
    ngOnInit(): void {
      this.subscriptions.push(this.bookService.getBooks().subscribe((data)=>{
        this.books.push(...data);
      }));
      this.highlightBook = this.books.find(book=>book.isHighlight) as Book;
    }
}
