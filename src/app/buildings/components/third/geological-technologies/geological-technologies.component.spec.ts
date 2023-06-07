import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeologicalTechnologiesComponent } from './geological-technologies.component';

describe('GeologicalTechnologiesComponent', () => {
  let component: GeologicalTechnologiesComponent;
  let fixture: ComponentFixture<GeologicalTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeologicalTechnologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeologicalTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
