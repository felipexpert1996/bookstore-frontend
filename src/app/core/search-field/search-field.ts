import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { BookService } from '../../services/book/book.service';

@Component({
  selector: 'app-search-field',
  imports: [AsyncPipe, MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatAutocompleteModule],
  templateUrl: './search-field.html',
  styleUrl: './search-field.scss'
})
export class SearchField implements OnInit {
  searchControl = new FormControl('');
  options: string[] = [];
  filteredOptions!: Observable<string[]>;

  private bookService = inject(BookService);

  ngOnInit() {
    this.bookService.getData().subscribe(books => {
      this.options = books.map(book => book.title);
    });

    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
