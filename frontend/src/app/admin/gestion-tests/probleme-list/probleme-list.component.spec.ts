import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeListComponent } from './probleme-list.component';

describe('ProblemeListComponent', () => {
  let component: ProblemeListComponent;
  let fixture: ComponentFixture<ProblemeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProblemeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProblemeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
