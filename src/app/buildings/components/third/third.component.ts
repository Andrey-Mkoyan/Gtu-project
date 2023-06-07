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
        small: '../../../../assets/images/3-building/1.jpg',
        medium: '../../../../assets/images/3-building/1.jpg',
        big: '../../../../assets/images/3-building/1.jpg'
      },
      {
        small: '../../../../assets/images/3-building/2.jpg',
        medium: '../../../../assets/images/3-building/2.jpg',
        big: '../../../../assets/images/3-building/2.jpg'
      },
      {
        small: '../../../../assets/images/3-building/3.jpg',
        medium: '../../../../assets/images/3-building/3.jpg',
        big: '../../../../assets/images/3-building/3.jpg'
      },
      {
        small: '../../../../assets/images/3-building/4.jpg',
        medium: '../../../../assets/images/3-building/4.jpg',
        big: '../../../../assets/images/3-building/4.jpg'
      },
    ]
  }
}
