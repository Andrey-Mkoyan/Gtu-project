import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermotechnicalComponent } from './thermotechnical.component';

describe('ThermotechnicalComponent', () => {
  let component: ThermotechnicalComponent;
  let fixture: ComponentFixture<ThermotechnicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThermotechnicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThermotechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
