import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingSewingComponent } from './cutting-sewing.component';

describe('CuttingSewingComponent', () => {
  let component: CuttingSewingComponent;
  let fixture: ComponentFixture<CuttingSewingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuttingSewingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuttingSewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
