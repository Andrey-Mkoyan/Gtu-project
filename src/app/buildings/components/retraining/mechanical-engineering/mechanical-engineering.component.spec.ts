import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalEngineeringComponent } from './mechanical-engineering.component';

describe('MechanicalEngineeringComponent', () => {
  let component: MechanicalEngineeringComponent;
  let fixture: ComponentFixture<MechanicalEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicalEngineeringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechanicalEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
