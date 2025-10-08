import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeFormComponent } from './probleme-form.component';

describe('ProblemeFormComponent', () => {
  let component: ProblemeFormComponent;
  let fixture: ComponentFixture<ProblemeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProblemeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProblemeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
