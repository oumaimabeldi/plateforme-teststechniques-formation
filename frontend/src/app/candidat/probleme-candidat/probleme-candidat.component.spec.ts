import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeCandidatComponent } from './probleme-candidat.component';

describe('ProblemeCandidatComponent', () => {
  let component: ProblemeCandidatComponent;
  let fixture: ComponentFixture<ProblemeCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProblemeCandidatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProblemeCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
