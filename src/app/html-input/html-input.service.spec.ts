import { TestBed } from '@angular/core/testing';

import { HtmlInputService } from './html-input.service';

describe('HtmlInputService', () => {
  let service: HtmlInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
