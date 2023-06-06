import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighVoltageElectricianComponent } from './high-voltage-electrician.component';

describe('HighVoltageElectricianComponent', () => {
  let component: HighVoltageElectricianComponent;
  let fixture: ComponentFixture<HighVoltageElectricianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighVoltageElectricianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighVoltageElectricianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
