import { Component, Input } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];
  @Input()width: string = '600'
  @Input()height: string = '400'
  @Input()imagesFromOutside!:NgxGalleryImage[];
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: `${this.width}px`,
        height: `${this.height}px`,
        thumbnailsColumns: this.imagesFromOutside.length,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnClick:true,
        previewCloseOnEsc:true,
        thumbnailsSwipe: true,
      },
      {
        breakpoint: 1400,
        width: '1100px',
      },
      {
        breakpoint: 1200,
        width: '900px',
        height: '600px',
      },
      {
        breakpoint: 1000,
        width: '750px',
        height: '600px',
      },
      {
        breakpoint: 900,
        width: '700px',
        height: '500px',
      },
      // max-width 800
      {
        breakpoint: 700,
        width: '500px',
        height: '400px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
        
        
      },
      {
        breakpoint: 500,
        width: '370px',
        height:'300px',
        preview: false
      },

      // max-width 400
    
      
    ];

    this.galleryImages = this.imagesFromOutside
  }
  
}
