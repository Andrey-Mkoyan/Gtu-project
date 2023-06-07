import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralSubstancesComponent } from './mineral-substances.component';

describe('MineralSubstancesComponent', () => {
  let component: MineralSubstancesComponent;
  let fixture: ComponentFixture<MineralSubstancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MineralSubstancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MineralSubstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
