import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowAndInternationalRelationsComponent } from './low-and-international-relations.component';

describe('LowAndInternationalRelationsComponent', () => {
  let component: LowAndInternationalRelationsComponent;
  let fixture: ComponentFixture<LowAndInternationalRelationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowAndInternationalRelationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowAndInternationalRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
