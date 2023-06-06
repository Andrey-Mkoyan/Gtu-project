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
        small: '../../../../../assets/images/8-building/library/1.jpg',
        medium: '../../../../../assets/images/8-building/library/1.jpg',
        big: '../../../../../assets/images/8-building/library/1.jpg'
      },
      {
        small: '../../../../../assets/images/8-building/library/2.jpg',
        medium: '../../../../../assets/images/8-building/library/2.jpg',
        big: '../../../../../assets/images/8-building/library/2.jpg'
      },
    ]
  }
}
