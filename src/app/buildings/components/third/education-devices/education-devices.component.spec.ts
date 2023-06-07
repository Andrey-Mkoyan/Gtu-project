import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDevicesComponent } from './education-devices.component';

describe('EducationDevicesComponent', () => {
  let component: EducationDevicesComponent;
  let fixture: ComponentFixture<EducationDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
