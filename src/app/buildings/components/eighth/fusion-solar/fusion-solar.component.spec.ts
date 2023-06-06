import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionSolarComponent } from './fusion-solar.component';

describe('FusionSolarComponent', () => {
  let component: FusionSolarComponent;
  let fixture: ComponentFixture<FusionSolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FusionSolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FusionSolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
