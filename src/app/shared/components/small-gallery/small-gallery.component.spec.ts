import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallGalleryComponent } from './small-gallery.component';

describe('SmallGalleryComponent', () => {
  let component: SmallGalleryComponent;
  let fixture: ComponentFixture<SmallGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
