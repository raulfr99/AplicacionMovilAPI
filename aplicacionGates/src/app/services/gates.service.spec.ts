import { TestBed } from '@angular/core/testing';

import { GatesService } from './gates.service';

describe('GatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GatesService = TestBed.get(GatesService);
    expect(service).toBeTruthy();
  });
});
