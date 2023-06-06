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
        small: '../../../../../assets/images/2-building/san-diego/1.jpg',
        medium: '../../../../../assets/images/2-building/san-diego/1.jpg',
        big: '../../../../../assets/images/2-building/san-diego/1.jpg'
      },
      {
        small: '../../../../../assets/images/2-building/san-diego/2.jpg',
        medium: '../../../../../assets/images/2-building/san-diego/2.jpg',
        big: '../../../../../assets/images/2-building/san-diego/2.jpg'
      },
      {
        small: '../../../../../assets/images/2-building/san-diego/3.jpg',
        medium: '../../../../../assets/images/2-building/san-diego/3.jpg',
        big: '../../../../../assets/images/2-building/san-diego/3.jpg'
      },
      {
        small: '../../../../../assets/images/2-building/san-diego/4.jpg',
        medium: '../../../../../assets/images/2-building/san-diego/4.jpg',
        big: '../../../../../assets/images/2-building/san-diego/4.jpg'
      },
      {
        small: '../../../../../assets/images/2-building/san-diego/5.jpg',
        medium: '../../../../../assets/images/2-building/san-diego/5.jpg',
        big: '../../../../../assets/images/2-building/san-diego/5.jpg'
      },
      {
        small: '../../../../../assets/images/2-building/san-diego/6.jpg',
        medium: '../../../../../assets/images/2-building/san-diego/6.jpg',
        big: '../../../../../assets/images/2-building/san-diego/6.jpg'
      },
    ]
  }
}
