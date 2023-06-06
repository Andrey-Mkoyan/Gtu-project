import { Component } from '@angular/core';

@Component({
  selector: 'app-tenth',
  templateUrl: './tenth.component.html',
  styleUrls: ['./tenth.component.scss']
})
export class TenthComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../assets/images/10-building/1.jpg',
        medium: '../../../../assets/images/10-building/1.jpg',
        big: '../../../../assets/images/10-building/1.jpg'
      },
      {
        small: '../../../../assets/images/10-building/2.jpg',
        medium: '../../../../assets/images/10-building/2.jpg',
        big: '../../../../assets/images/10-building/2.jpg'
      },
      {
        small: '../../../../assets/images/10-building/3.jpg',
        medium: '../../../../assets/images/10-building/3.jpg',
        big: '../../../../assets/images/10-building/3.jpg'
      },
      {
        small: '../../../../assets/images/10-building/4.jpg',
        medium: '../../../../assets/images/10-building/4.jpg',
        big: '../../../../assets/images/10-building/4.jpg'
      },
      {
        small: '../../../../assets/images/10-building/5.jpg',
        medium: '../../../../assets/images/10-building/5.jpg',
        big: '../../../../assets/images/10-building/5.jpg'
      },
      {
        small: '../../../../assets/images/10-building/6.jpg',
        medium: '../../../../assets/images/10-building/6.jpg',
        big: '../../../../assets/images/10-building/6.jpg'
      },
    ]
  }
}
