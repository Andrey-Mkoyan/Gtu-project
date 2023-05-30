import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';


@NgModule({
  declarations: [
    CardComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxGalleryModule
  ],
  exports: [
    CardComponent,
    GalleryComponent
  ]
})
export class SharedModule { }
