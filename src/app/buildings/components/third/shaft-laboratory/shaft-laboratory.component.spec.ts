import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaftLaboratoryComponent } from './shaft-laboratory.component';

describe('ShaftLaboratoryComponent', () => {
  let component: ShaftLaboratoryComponent;
  let fixture: ComponentFixture<ShaftLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShaftLaboratoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShaftLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
