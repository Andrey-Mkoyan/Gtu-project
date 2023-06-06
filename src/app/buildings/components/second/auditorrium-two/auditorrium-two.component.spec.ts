import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorriumTwoComponent } from './auditorrium-two.component';

describe('AuditorriumTwoComponent', () => {
  let component: AuditorriumTwoComponent;
  let fixture: ComponentFixture<AuditorriumTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditorriumTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditorriumTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
