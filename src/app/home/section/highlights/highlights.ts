import { Component, OnInit, inject } from '@angular/core';
import { Item } from './item/item';
import { CommonModule } from '@angular/common';
import { BookModel } from '../../../model/book.model';
import { BookService } from '../../../services/book/book.service';

@Component({
  selector: 'app-highlights',
  imports: [Item, CommonModule],
  templateUrl: './highlights.html',
  styleUrl: './highlights.scss'
})
export class Highlights implements OnInit {

  highlights: BookModel[] = [];

  private bookService = inject(BookService);

  ngOnInit(): void {
    this.bookService.getData().subscribe(data => {
      this.highlights = data;
    });
  }
}
