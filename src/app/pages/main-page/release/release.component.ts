import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../../../models/book.model';
import { BooksService } from '../../../services/books.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-release',
  imports: [NgOptimizedImage, CommonModule, MatCardModule, MatTooltipModule],
  templateUrl: './release.component.html',
  styleUrl: './release.component.scss'
})
export class ReleaseComponent implements OnDestroy, OnInit {
  private subscriptions: Subscription[] = [];
      protected books: Book[] = [];
    
      constructor(private bookService: BooksService){
      }
    
      ngOnDestroy(): void {
        this.subscriptions.forEach(item=>item.unsubscribe());
      }
    
      ngOnInit(): void {
        this.subscriptions.push(this.bookService.getBooks().subscribe((data)=>{
          this.books.push(...data.slice(0, 8));
        }));
      }
}
