import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { DesktopMenu } from './desktop-menu';
import { By } from '@angular/platform-browser';

describe('DesktopMenu', () => {
  let component: DesktopMenu;
  let fixture: ComponentFixture<DesktopMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopMenu],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopMenu);
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
