import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsCandidatsComponent } from './resultats-candidats.component';

describe('ResultatsCandidatsComponent', () => {
  let component: ResultatsCandidatsComponent;
  let fixture: ComponentFixture<ResultatsCandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultatsCandidatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultatsCandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
