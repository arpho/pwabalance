import { TestBed } from '@angular/core/testing';

import { InfoService } from './info.service';
import { HttpClientModule } from '@angular/common/http';

describe('InfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [HttpClientModule] }));

  it('should be created', () => {
    const service: InfoService = TestBed.get(InfoService);
    expect(service).toBeTruthy();
    expect(service.getPackage()).toBeTruthy();
  });
});
