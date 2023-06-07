import { Component } from '@angular/core';

@Component({
  selector: 'app-first-building',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../assets/images/1-building/1.jpg',
        medium: '../../../../assets/images/1-building/1.jpg',
        big: '../../../../assets/images/1-building/1.jpg'
      },
      {
        small: '../../../../assets/images/1-building/2.jpg',
        medium: '../../../../assets/images/1-building/2.jpg',
        big: '../../../../assets/images/1-building/2.jpg'
      },
      {
        small: '../../../../assets/images/1-building/3.jpg',
        medium: '../../../../assets/images/1-building/3.jpg',
        big: '../../../../assets/images/1-building/3.jpg'
      },
      {
        small: '../../../../assets/images/1-building/4.jpg',
        medium: '../../../../assets/images/1-building/4.jpg',
        big: '../../../../assets/images/1-building/4.jpg'
      },
      {
        small: '../../../../assets/images/1-building/5.jpg',
        medium: '../../../../assets/images/1-building/5.jpg',
        big: '../../../../assets/images/1-building/5.jpg'
      },
    ]
  }
}
