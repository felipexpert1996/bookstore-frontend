import { Component, OnInit, inject } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { BookModel } from '../model/book.model';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../services/cart/cart';

@Component({
  selector: 'app-detail',
  imports: [NgOptimizedImage, CurrencyPipe, MatButtonModule],
  templateUrl: './detail.html',
  styleUrl: './detail.scss'
})
export class Detail implements OnInit {
  book!: BookModel;
  itemId!: string;

  private bookService = inject(BookService);
  private route = inject(ActivatedRoute);
  private cartService = inject(CartService);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params['id'];
    });


    this.bookService.getData().subscribe(data => {
      data.find(b => {
        if (b.id === this.itemId) {
          this.book = b;
        }
      });
    });
  }

  addToCart(book: BookModel): void {
    this.cartService.addToCart({quantity: 1, ...book});
  }
}
