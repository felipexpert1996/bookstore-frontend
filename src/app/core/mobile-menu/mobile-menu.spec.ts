import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenu } from './mobile-menu';
import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('MobileMenu', () => {
  let component: MobileMenu;
  let fixture: ComponentFixture<MobileMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileMenu],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title "Bookstore"', () => {
    fixture.detectChanges();
    const toolbarEl = fixture.debugElement.query(By.css('mat-toolbar')).nativeElement as HTMLElement;
    const text = toolbarEl.textContent?.replace(/\s+/g, ' ').trim();
    expect(text).toContain('Livraria');
  });

  it('should render the title and main buttons', () => {
    const navItems = fixture.debugElement.queryAll(By.css('a[mat-list-item]'));
    const labels = navItems.map(a => a.nativeElement.textContent.trim());
    expect(labels).toEqual(jasmine.arrayContaining(['Catálogo', 'Promoções', 'Sobre', 'Contato']));
  });

  it('should open the sidenav when clicking the menu button', async () => {
    const menuBtn = fixture.debugElement.query(By.css('button.menu-mobile'));
    menuBtn.triggerEventHandler('click');
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.componentInstance.sidenav.opened).toBe(true);
  });

  it('should close the sidenav when clicking the close button', async () => {
    await fixture.componentInstance.sidenav.open();
    fixture.detectChanges();
    const closeBtn = fixture.debugElement.query(By.css('#mobile-sidenav-header .close-button'));
    closeBtn.triggerEventHandler('click');
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.componentInstance.sidenav.opened).toBe(false);
  });

  it('should close the sidenav when clicking on a navigation item', async () => {
    await fixture.componentInstance.sidenav.open();
    fixture.detectChanges();
    const firstItem = fixture.debugElement.query(By.css('a[mat-list-item]'));
    firstItem.triggerEventHandler('click');
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.componentInstance.sidenav.opened).toBe(false);
  });
});
