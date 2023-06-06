import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechatronicsComponent } from './mechatronics.component';

describe('MechatronicsComponent', () => {
  let component: MechatronicsComponent;
  let fixture: ComponentFixture<MechatronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechatronicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechatronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
