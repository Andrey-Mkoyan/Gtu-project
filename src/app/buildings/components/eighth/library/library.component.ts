import { Component } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/8-building/library/1.webp',
        medium: '../../../../../assets/images/8-building/library/1.webp',
        big: '../../../../../assets/images/8-building/library/1.webp'
      },
      {
        small: '../../../../../assets/images/8-building/library/2.webp',
        medium: '../../../../../assets/images/8-building/library/2.webp',
        big: '../../../../../assets/images/8-building/library/2.webp'
      },
    ]
  }
}
