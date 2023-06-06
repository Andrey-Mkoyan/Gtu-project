import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalCircuitsComponent } from './electrical-circuits.component';

describe('ElectricalCircuitsComponent', () => {
  let component: ElectricalCircuitsComponent;
  let fixture: ComponentFixture<ElectricalCircuitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricalCircuitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricalCircuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
