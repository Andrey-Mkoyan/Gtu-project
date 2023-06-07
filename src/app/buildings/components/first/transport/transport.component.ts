import { Component } from '@angular/core';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent {
  images:any
  images2:any
  images3:any
  images4:any
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/1-building/transport/1.jpg',
        medium: '../../../../../assets/images/1-building/transport/1.jpg',
        big: '../../../../../assets/images/1-building/transport/1.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/transport/2.jpg',
        medium: '../../../../../assets/images/1-building/transport/2.jpg',
        big: '../../../../../assets/images/1-building/transport/2.jpg'
      },
    ];
    this.images2 = [
      {
        small: '../../../../../assets/images/1-building/transport/parts/1.jpg',
        medium: '../../../../../assets/images/1-building/transport/parts/1.jpg',
        big: '../../../../../assets/images/1-building/transport/parts/1.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/transport/parts/2.jpg',
        medium: '../../../../../assets/images/1-building/transport/parts/2.jpg',
        big: '../../../../../assets/images/1-building/transport/parts/2.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/transport/parts/3.jpg',
        medium: '../../../../../assets/images/1-building/transport/parts/3.jpg',
        big: '../../../../../assets/images/1-building/transport/parts/3.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/transport/parts/4.jpg',
        medium: '../../../../../assets/images/1-building/transport/parts/4.jpg',
        big: '../../../../../assets/images/1-building/transport/parts/4.jpg'
      },
    ];
    this.images3 = [
      {
        small: '../../../../../assets/images/1-building/transport/tegeta/1.jpg',
        medium: '../../../../../assets/images/1-building/transport/tegeta/1.jpg',
        big: '../../../../../assets/images/1-building/transport/tegeta/1.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/transport/tegeta/2.jpg',
        medium: '../../../../../assets/images/1-building/transport/tegeta/2.jpg',
        big: '../../../../../assets/images/1-building/transport/tegeta/2.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/transport/tegeta/3.jpg',
        medium: '../../../../../assets/images/1-building/transport/tegeta/3.jpg',
        big: '../../../../../assets/images/1-building/transport/tegeta/3.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/transport/tegeta/4.jpg',
        medium: '../../../../../assets/images/1-building/transport/tegeta/4.jpg',
        big: '../../../../../assets/images/1-building/transport/tegeta/4.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/transport/tegeta/5.jpg',
        medium: '../../../../../assets/images/1-building/transport/tegeta/5.jpg',
        big: '../../../../../assets/images/1-building/transport/tegeta/5.jpg'
      },
    ];
    this.images4 = [
      {
        small: '../../../../../assets/images/1-building/transport/electro/1.jpg',
        medium: '../../../../../assets/images/1-building/transport/electro/1.jpg',
        big: '../../../../../assets/images/1-building/transport/electro/1.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/transport/electro/2.jpg',
        medium: '../../../../../assets/images/1-building/transport/electro/2.jpg',
        big: '../../../../../assets/images/1-building/transport/electro/2.jpg'
      },
    ]
  }
}
