import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrainingComponent } from './retraining.component';

describe('RetrainingComponent', () => {
  let component: RetrainingComponent;
  let fixture: ComponentFixture<RetrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
