import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent {
  images:any;
  constructor() {
    this.images= [
      {
        small: '../../../../assets/images/4-building/1.jpg',
        medium: '../../../../assets/images/4-building/1.jpg',
        big: '../../../../assets/images/4-building/1.jpg'
      },
      {
        small: '../../../../assets/images/4-building/3.jpg',
        medium: '../../../../assets/images/4-building/3.jpg',
        big: '../../../../assets/images/4-building/3.jpg'
      },
      {
        small: '../../../../assets/images/4-building/4.jpg',
        medium: '../../../../assets/images/4-building/4.jpg',
        big: '../../../../assets/images/4-building/4.jpg'
      },
      {
        small: '../../../../assets/images/4-building/5.jpg',
        medium: '../../../../assets/images/4-building/5.jpg',
        big: '../../../../assets/images/4-building/5.jpg'
      },
      {
        small: '../../../../assets/images/4-building/6.jpg',
        medium: '../../../../assets/images/4-building/6.jpg',
        big: '../../../../assets/images/4-building/6.jpg'
      },
      {
        small: '../../../../assets/images/4-building/7.jpg',
        medium: '../../../../assets/images/4-building/7.jpg',
        big: '../../../../assets/images/4-building/7.jpg'
      },
      {
        small: '../../../../assets/images/4-building/8.jpg',
        medium: '../../../../assets/images/4-building/8.jpg',
        big: '../../../../assets/images/4-building/8.jpg'
      }
    ]
  }
}
