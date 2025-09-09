import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { MatButtonModule } from '@angular/material/button';
import { HighlightModel } from '../../../../model/highlight.model';

@Component({
  selector: 'app-item',
  imports: [NgOptimizedImage, MatButtonModule],
  templateUrl: './item.html',
  styleUrl: './item.scss'
})
export class Item {
  @Input() item!: HighlightModel;
}
