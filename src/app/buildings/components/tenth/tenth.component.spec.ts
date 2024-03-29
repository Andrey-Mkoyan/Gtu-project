import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenthComponent } from './tenth.component';

describe('TenthComponent', () => {
  let component: TenthComponent;
  let fixture: ComponentFixture<TenthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
