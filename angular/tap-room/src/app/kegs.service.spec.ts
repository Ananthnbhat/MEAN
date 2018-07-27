import { TestBed, inject } from '@angular/core/testing';

import { KegsService } from './kegs.service';

describe('KegsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KegsService]
    });
  });

  it('should be created', inject([KegsService], (service: KegsService) => {
    expect(service).toBeTruthy();
  }));
});
