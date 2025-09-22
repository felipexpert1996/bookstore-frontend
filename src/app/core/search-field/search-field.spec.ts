import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchField } from './search-field';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { BookService } from '../../services/book/book.service';

const mockBooks = [
  { title: 'Angular Avançado' },
  { title: 'RxJS na Prática' },
  { title: 'TypeScript Essencial' }
];

class MockBookService {
  getData() {
    return of(mockBooks);
  }
}

describe('SearchField', () => {
  let component: SearchField;
  let fixture: ComponentFixture<SearchField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchField, ReactiveFormsModule],
      providers: [
        { provide: BookService, useClass: MockBookService },
        provideZonelessChangeDetection(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate "options" from the service', () => {
    expect(component.options.length).toBe(3);
    expect(component.options).toContain('Angular Avançado');
  });

  it('should initialize "filteredOptions"', (done) => {
    component.filteredOptions?.subscribe(options => {
      expect(options).toEqual(mockBooks.map(b => b.title));
      done();
    });
  });

  it('should filter options when typing "angular"', (done) => {
    const sub = component.filteredOptions?.subscribe(options => {
      if (options.length === 1 && options[0] === 'Angular Avançado') {
        expect(options).toEqual(['Angular Avançado']);
        sub?.unsubscribe();
        done();
      }
    });
    component.searchControl.setValue('angular');
  });

  it('should update the input in the template when changing the FormControl', async () => {
    component.searchControl.setValue('RxJS');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    expect(inputEl.value).toBe('RxJS');
  });
});
