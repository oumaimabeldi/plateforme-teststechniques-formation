import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabCoursListComponent } from './collab-cours-list.component';

describe('CollabCoursListComponent', () => {
  let component: CollabCoursListComponent;
  let fixture: ComponentFixture<CollabCoursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollabCoursListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollabCoursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
