import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Menu } from './menu';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('Menu', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu],
      providers: [provideZonelessChangeDetection(), provideHttpClient(), { provide: ActivatedRoute, useValue: {} },]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title "Bookstore"', () => {
    expect(fixture.nativeElement.textContent).toContain('Livraria');
  });

  it('should render the title and main buttons', () => {
    const toolbar = fixture.nativeElement as HTMLElement;
    expect(toolbar.textContent).toContain('Livraria');
    const labels = fixture.debugElement.queryAll(By.css('button[mat-button]'))
      .map(btn => btn.nativeElement.textContent.trim());
    expect(labels).toEqual(jasmine.arrayContaining(['Catálogo', 'Promoções', 'Sobre', 'Contato']));
  });
});
