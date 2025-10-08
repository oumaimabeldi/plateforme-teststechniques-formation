import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributionTestComponent } from './attribution-test.component';

describe('AttributionTestComponent', () => {
  let component: AttributionTestComponent;
  let fixture: ComponentFixture<AttributionTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttributionTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttributionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
