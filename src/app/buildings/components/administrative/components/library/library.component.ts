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
        small: '../../../../../../assets/images/administrative/library/img1.jpg',
        medium: '../../../../../../assets/images/administrative/library/img1.jpg',
        big: '../../../../../../assets/images/administrative/library/img1.jpg'
      },
      {
        small: '../../../../../../assets/images/administrative/library/img2.jpg',
        medium: '../../../../../../assets/images/administrative/library/img2.jpg',
        big: '../../../../../../assets/images/administrative/library/img2.jpg'
      },
      {
        small: '../../../../../../assets/images/administrative/library/img3.jpg',
        medium: '../../../../../../assets/images/administrative/library/img3.jpg',
        big: '../../../../../../assets/images/administrative/library/img3.jpg'
      },
      {
        small: '../../../../../../assets/images/administrative/library/img4.jpg',
        medium: '../../../../../../assets/images/administrative/library/img4.jpg',
        big: '../../../../../../assets/images/administrative/library/img4.jpg'
      },
      {
        small: '../../../../../../assets/images/administrative/library/img5.jpg',
        medium: '../../../../../../assets/images/administrative/library/img5.jpg',
        big: '../../../../../../assets/images/administrative/library/img5.jpg'
      },
    ]
  }
}
