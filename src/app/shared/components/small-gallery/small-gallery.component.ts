import { Component, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-small-gallery',
  templateUrl: './small-gallery.component.html',
  styleUrls: ['./small-gallery.component.scss']
})
export class SmallGalleryComponent {
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
