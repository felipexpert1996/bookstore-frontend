import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-catalog',
  imports: [NgOptimizedImage, MatButtonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
}
