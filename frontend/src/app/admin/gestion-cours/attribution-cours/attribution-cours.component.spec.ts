import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributionCoursComponent } from './attribution-cours.component';

describe('AttributionCoursComponent', () => {
  let component: AttributionCoursComponent;
  let fixture: ComponentFixture<AttributionCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttributionCoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttributionCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
