import { Component } from '@angular/core';

@Component({
  selector: 'app-third-building',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../assets/images/3-building/1.webp',
        medium: '../../../../assets/images/3-building/1.webp',
        big: '../../../../assets/images/3-building/1.webp'
      },
      {
        small: '../../../../assets/images/3-building/2.webp',
        medium: '../../../../assets/images/3-building/2.webp',
        big: '../../../../assets/images/3-building/2.webp'
      },
      {
        small: '../../../../assets/images/3-building/3.webp',
        medium: '../../../../assets/images/3-building/3.webp',
        big: '../../../../assets/images/3-building/3.webp'
      },
      {
        small: '../../../../assets/images/3-building/4.webp',
        medium: '../../../../assets/images/3-building/4.webp',
        big: '../../../../assets/images/3-building/4.webp'
      },
    ]
  }
}
