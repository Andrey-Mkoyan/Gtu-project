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
        small: '../../../../../assets/images/2-building/public-theater/1.webp',
        medium: '../../../../../assets/images/2-building/public-theater/1.webp',
        big: '../../../../../assets/images/2-building/public-theater/1.webp'
      },
      {
        small: '../../../../../assets/images/2-building/public-theater/2.webp',
        medium: '../../../../../assets/images/2-building/public-theater/2.webp',
        big: '../../../../../assets/images/2-building/public-theater/2.webp'
      },
      {
        small: '../../../../../assets/images/2-building/public-theater/3.webp',
        medium: '../../../../../assets/images/2-building/public-theater/3.webp',
        big: '../../../../../assets/images/2-building/public-theater/3.webp'
      },
    ]
  }
}
