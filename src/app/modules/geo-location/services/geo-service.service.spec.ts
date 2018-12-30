import { TestBed } from '@angular/core/testing';

import { GeoServiceService } from './geo-service';

describe('GeoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoServiceService = TestBed.get(GeoServiceService);
    expect(service).toBeTruthy();
  });
});
