import { Component } from '@angular/core';

@Component({
  selector: 'app-san-diego',
  templateUrl: './san-diego.component.html',
  styleUrls: ['./san-diego.component.scss']
})
export class SanDiegoComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/2-building/san-diego/1.webp',
        medium: '../../../../../assets/images/2-building/san-diego/1.webp',
        big: '../../../../../assets/images/2-building/san-diego/1.webp'
      },
      {
        small: '../../../../../assets/images/2-building/san-diego/2.webp',
        medium: '../../../../../assets/images/2-building/san-diego/2.webp',
        big: '../../../../../assets/images/2-building/san-diego/2.webp'
      },
      {
        small: '../../../../../assets/images/2-building/san-diego/3.webp',
        medium: '../../../../../assets/images/2-building/san-diego/3.webp',
        big: '../../../../../assets/images/2-building/san-diego/3.webp'
      },
      {
        small: '../../../../../assets/images/2-building/san-diego/4.webp',
        medium: '../../../../../assets/images/2-building/san-diego/4.webp',
        big: '../../../../../assets/images/2-building/san-diego/4.webp'
      },
      {
        small: '../../../../../assets/images/2-building/san-diego/5.webp',
        medium: '../../../../../assets/images/2-building/san-diego/5.webp',
        big: '../../../../../assets/images/2-building/san-diego/5.webp'
      },
      {
        small: '../../../../../assets/images/2-building/san-diego/6.webp',
        medium: '../../../../../assets/images/2-building/san-diego/6.webp',
        big: '../../../../../assets/images/2-building/san-diego/6.webp'
      },
    ]
  }
}
