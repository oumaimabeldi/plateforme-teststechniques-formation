import { TestBed } from '@angular/core/testing';

import { AttributionCoursService } from './attribution-cours.service';

describe('AttributionCoursService', () => {
  let service: AttributionCoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttributionCoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
