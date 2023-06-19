import { TestBed } from '@angular/core/testing';

import { PupUiService } from './pup-ui.service';

describe('PupUiService', () => {
  let service: PupUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PupUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
