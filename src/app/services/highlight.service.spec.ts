import { TestBed } from '@angular/core/testing';

import { Highlight } from './highlight';

describe('Highlight', () => {
  let service: Highlight;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Highlight);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
