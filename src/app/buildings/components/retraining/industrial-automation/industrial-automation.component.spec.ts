import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialAutomationComponent } from './industrial-automation.component';

describe('IndustrialAutomationComponent', () => {
  let component: IndustrialAutomationComponent;
  let fixture: ComponentFixture<IndustrialAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustrialAutomationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrialAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
