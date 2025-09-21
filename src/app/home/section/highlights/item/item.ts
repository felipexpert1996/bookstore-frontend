import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { MatButtonModule } from '@angular/material/button';
import { BookModel } from '../../../../model/book.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-item',
  imports: [NgOptimizedImage, MatButtonModule, CurrencyPipe],
  templateUrl: './item.html',
  styleUrl: './item.scss'
})
export class Item {
  @Input() item!: BookModel;
}
