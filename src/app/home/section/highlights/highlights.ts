import { Component, OnInit } from '@angular/core';
import { Item } from './item/item';
import { CommonModule } from '@angular/common';
import { HighlightService } from '../../../services/Highlight.service';
import { HighlightModel } from '../../../model/highlight.model';

@Component({
  selector: 'app-highlights',
  imports: [Item, CommonModule],
  templateUrl: './highlights.html',
  styleUrl: './highlights.scss'
})
export class Highlights implements OnInit {

  highlights: HighlightModel[] = [];

  constructor(private highlightService: HighlightService) {}

  ngOnInit(): void {
    this.highlightService.getData().subscribe(data => {
      this.highlights = data;
    });
  }
}
