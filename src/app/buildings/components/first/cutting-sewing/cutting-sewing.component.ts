import { Component } from '@angular/core';

@Component({
  selector: 'app-cutting-sewing',
  templateUrl: './cutting-sewing.component.html',
  styleUrls: ['./cutting-sewing.component.scss']
})
export class CuttingSewingComponent {
  images:any
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/1-building/cutting-sewing/1.jpg',
        medium: '../../../../../assets/images/1-building/cutting-sewing/1.jpg',
        big: '../../../../../assets/images/1-building/cutting-sewing/1.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/cutting-sewing/2.jpg',
        medium: '../../../../../assets/images/1-building/cutting-sewing/2.jpg',
        big: '../../../../../assets/images/1-building/cutting-sewing/2.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/cutting-sewing/3.jpg',
        medium: '../../../../../assets/images/1-building/cutting-sewing/3.jpg',
        big: '../../../../../assets/images/1-building/cutting-sewing/3.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/cutting-sewing/4.jpg',
        medium: '../../../../../assets/images/1-building/cutting-sewing/4.jpg',
        big: '../../../../../assets/images/1-building/cutting-sewing/4.jpg'
      },
    ]
  }
}
