import { Component } from '@angular/core';

@Component({
  selector: 'app-geology',
  templateUrl: './geology.component.html',
  styleUrls: ['./geology.component.scss']
})
export class GeologyComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/3-building/geology/1.webp',
        medium: '../../../../../assets/images/3-building/geology/1.webp',
        big: '../../../../../assets/images/3-building/geology/1.webp'
      },
      {
        small: '../../../../../assets/images/3-building/geology/2.webp',
        medium: '../../../../../assets/images/3-building/geology/2.webp',
        big: '../../../../../assets/images/3-building/geology/2.webp'
      },
      {
        small: '../../../../../assets/images/3-building/geology/3.webp',
        medium: '../../../../../assets/images/3-building/geology/3.webp',
        big: '../../../../../assets/images/3-building/geology/3.webp'
      },
      {
        small: '../../../../../assets/images/3-building/geology/4.webp',
        medium: '../../../../../assets/images/3-building/geology/4.webp',
        big: '../../../../../assets/images/3-building/geology/4.webp'
      },
      {
        small: '../../../../../assets/images/3-building/geology/5.webp',
        medium: '../../../../../assets/images/3-building/geology/5.webp',
        big: '../../../../../assets/images/3-building/geology/5.webp'
      },
      {
        small: '../../../../../assets/images/3-building/geology/6.webp',
        medium: '../../../../../assets/images/3-building/geology/6.webp',
        big: '../../../../../assets/images/3-building/geology/6.webp'
      },
    ]
  }
}
