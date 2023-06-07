import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTechnologiesComponent } from './business-technologies.component';

describe('BusinessTechnologiesComponent', () => {
  let component: BusinessTechnologiesComponent;
  let fixture: ComponentFixture<BusinessTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessTechnologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
