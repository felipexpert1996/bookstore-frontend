import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Highlights } from './highlights';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


describe('Highlights', () => {
  let component: Highlights;
  let fixture: ComponentFixture<Highlights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Highlights],
      providers: [provideZonelessChangeDetection(), provideHttpClient(), { provide: ActivatedRoute, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Highlights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
