import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingLaboratoryComponent } from './heating-laboratory.component';

describe('HeatingLaboratoryComponent', () => {
  let component: HeatingLaboratoryComponent;
  let fixture: ComponentFixture<HeatingLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatingLaboratoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatingLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
