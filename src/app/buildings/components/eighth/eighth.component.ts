import { Component } from '@angular/core';

@Component({
  selector: 'app-eighth',
  templateUrl: './eighth.component.html',
  styleUrls: ['./eighth.component.scss']
})
export class EighthComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../assets/images/8-building/1.jpg',
        medium: '../../../../assets/images/8-building/1.jpg',
        big: '../../../../assets/images/8-building/1.jpg'
      },
      {
        small: '../../../../assets/images/8-building/2.jpg',
        medium: '../../../../assets/images/8-building/2.jpg',
        big: '../../../../assets/images/8-building/2.jpg'
      },
      {
        small: '../../../../assets/images/8-building/3.jpg',
        medium: '../../../../assets/images/8-building/3.jpg',
        big: '../../../../assets/images/8-building/3.jpg'
      },
      {
        small: '../../../../assets/images/8-building/4.jpg',
        medium: '../../../../assets/images/8-building/4.jpg',
        big: '../../../../assets/images/8-building/4.jpg'
      },
      {
        small: '../../../../assets/images/8-building/5.jpg',
        medium: '../../../../assets/images/8-building/5.jpg',
        big: '../../../../assets/images/8-building/5.jpg'
      },
      {
        small: '../../../../assets/images/8-building/6.jpg',
        medium: '../../../../assets/images/8-building/6.jpg',
        big: '../../../../assets/images/8-building/6.jpg'
      },
      {
        small: '../../../../assets/images/8-building/7.jpg',
        medium: '../../../../assets/images/8-building/7.jpg',
        big: '../../../../assets/images/8-building/7.jpg'
      },
    ]
  }
}
