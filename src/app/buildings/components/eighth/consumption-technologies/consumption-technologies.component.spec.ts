import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionTechnologiesComponent } from './consumption-technologies.component';

describe('ConsumptionTechnologiesComponent', () => {
  let component: ConsumptionTechnologiesComponent;
  let fixture: ComponentFixture<ConsumptionTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumptionTechnologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumptionTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
