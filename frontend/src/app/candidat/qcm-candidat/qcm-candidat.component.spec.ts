import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmCandidatComponent } from './qcm-candidat.component';

describe('QcmCandidatComponent', () => {
  let component: QcmCandidatComponent;
  let fixture: ComponentFixture<QcmCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QcmCandidatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QcmCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
