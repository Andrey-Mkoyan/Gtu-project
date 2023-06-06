import { Component } from '@angular/core';

@Component({
  selector: 'app-public-theater',
  templateUrl: './public-theater.component.html',
  styleUrls: ['./public-theater.component.scss']
})
export class PublicTheaterComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/2-building/public-theater/1.jpg',
        medium: '../../../../../assets/images/2-building/public-theater/1.jpg',
        big: '../../../../../assets/images/2-building/public-theater/1.jpg'
      },
      {
        small: '../../../../../assets/images/2-building/public-theater/2.jpg',
        medium: '../../../../../assets/images/2-building/public-theater/2.jpg',
        big: '../../../../../assets/images/2-building/public-theater/2.jpg'
      },
      {
        small: '../../../../../assets/images/2-building/public-theater/3.jpg',
        medium: '../../../../../assets/images/2-building/public-theater/3.jpg',
        big: '../../../../../assets/images/2-building/public-theater/3.jpg'
      },
    ]
  }
}
