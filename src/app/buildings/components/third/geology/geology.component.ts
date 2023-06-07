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
        small: '../../../../../assets/images/3-building/geology/1.jpg',
        medium: '../../../../../assets/images/3-building/geology/1.jpg',
        big: '../../../../../assets/images/3-building/geology/1.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/geology/2.jpg',
        medium: '../../../../../assets/images/3-building/geology/2.jpg',
        big: '../../../../../assets/images/3-building/geology/2.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/geology/3.jpg',
        medium: '../../../../../assets/images/3-building/geology/3.jpg',
        big: '../../../../../assets/images/3-building/geology/3.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/geology/4.jpg',
        medium: '../../../../../assets/images/3-building/geology/4.jpg',
        big: '../../../../../assets/images/3-building/geology/4.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/geology/5.jpg',
        medium: '../../../../../assets/images/3-building/geology/5.jpg',
        big: '../../../../../assets/images/3-building/geology/5.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/geology/6.jpg',
        medium: '../../../../../assets/images/3-building/geology/6.jpg',
        big: '../../../../../assets/images/3-building/geology/6.jpg'
      },
    ]
  }
}
