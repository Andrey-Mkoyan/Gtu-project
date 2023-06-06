import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTheaterComponent } from './public-theater.component';

describe('PublicTheaterComponent', () => {
  let component: PublicTheaterComponent;
  let fixture: ComponentFixture<PublicTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicTheaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
