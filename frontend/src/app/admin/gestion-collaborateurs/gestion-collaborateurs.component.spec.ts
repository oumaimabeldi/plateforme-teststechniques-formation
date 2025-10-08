import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCollaborateursComponent } from './gestion-collaborateurs.component';

describe('GestionCollaborateursComponent', () => {
  let component: GestionCollaborateursComponent;
  let fixture: ComponentFixture<GestionCollaborateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionCollaborateursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionCollaborateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
