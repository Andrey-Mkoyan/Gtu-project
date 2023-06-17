import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { SmallGalleryComponent } from './components/small-gallery/small-gallery.component';


@NgModule({
  declarations: [
    CardComponent,
    GalleryComponent,
    SmallGalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxGalleryModule
  ],
  exports: [
    CardComponent,
    GalleryComponent,
    SmallGalleryComponent
  ]
})
export class SharedModule { }
