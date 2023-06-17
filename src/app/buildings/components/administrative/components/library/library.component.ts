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
        small: '../../../../../../assets/images/administrative/library/img1.webp',
        medium: '../../../../../../assets/images/administrative/library/img1.webp',
        big: '../../../../../../assets/images/administrative/library/img1.webp'
      },
      {
        small: '../../../../../../assets/images/administrative/library/img2.webp',
        medium: '../../../../../../assets/images/administrative/library/img2.webp',
        big: '../../../../../../assets/images/administrative/library/img2.webp'
      },
      {
        small: '../../../../../../assets/images/administrative/library/img3.webp',
        medium: '../../../../../../assets/images/administrative/library/img3.webp',
        big: '../../../../../../assets/images/administrative/library/img3.webp'
      },
      {
        small: '../../../../../../assets/images/administrative/library/img4.webp',
        medium: '../../../../../../assets/images/administrative/library/img4.webp',
        big: '../../../../../../assets/images/administrative/library/img4.webp'
      },
      {
        small: '../../../../../../assets/images/administrative/library/img5.webp',
        medium: '../../../../../../assets/images/administrative/library/img5.webp',
        big: '../../../../../../assets/images/administrative/library/img5.webp'
      },
    ]
  }
}
