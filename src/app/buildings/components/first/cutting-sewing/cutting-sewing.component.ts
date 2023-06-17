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
        small: '../../../../../assets/images/1-building/cutting-sewing/1.webp',
        medium: '../../../../../assets/images/1-building/cutting-sewing/1.webp',
        big: '../../../../../assets/images/1-building/cutting-sewing/1.webp'
      },
      {
        small: '../../../../../assets/images/1-building/cutting-sewing/2.webp',
        medium: '../../../../../assets/images/1-building/cutting-sewing/2.webp',
        big: '../../../../../assets/images/1-building/cutting-sewing/2.webp'
      },
      {
        small: '../../../../../assets/images/1-building/cutting-sewing/3.webp',
        medium: '../../../../../assets/images/1-building/cutting-sewing/3.webp',
        big: '../../../../../assets/images/1-building/cutting-sewing/3.webp'
      },
      {
        small: '../../../../../assets/images/1-building/cutting-sewing/4.webp',
        medium: '../../../../../assets/images/1-building/cutting-sewing/4.webp',
        big: '../../../../../assets/images/1-building/cutting-sewing/4.webp'
      },
    ]
  }
}
