import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralogyAndPetrographyComponent } from './mineralogy-and-petrography.component';

describe('MineralogyAndPetrographyComponent', () => {
  let component: MineralogyAndPetrographyComponent;
  let fixture: ComponentFixture<MineralogyAndPetrographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MineralogyAndPetrographyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MineralogyAndPetrographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
