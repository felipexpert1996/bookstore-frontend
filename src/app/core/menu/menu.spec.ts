import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu } from './menu';
import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Menu', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the DesktopMenu and MobileMenu', () => {
    const desktop = fixture.debugElement.query(By.css('#desktop-menu'));
    const mobile = fixture.debugElement.query(By.css('#mobile-menu'));
    expect(desktop).toBeTruthy();
    expect(mobile).toBeTruthy();
  });
});
