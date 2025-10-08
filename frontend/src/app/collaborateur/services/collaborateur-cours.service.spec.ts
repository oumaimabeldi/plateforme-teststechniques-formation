import { TestBed } from '@angular/core/testing';

import { CollaborateurCoursService } from './collaborateur-cours.service';

describe('CollaborateurCoursService', () => {
  let service: CollaborateurCoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollaborateurCoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
