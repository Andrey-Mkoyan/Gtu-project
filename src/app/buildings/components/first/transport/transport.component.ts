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
        small: '../../../../../assets/images/1-building/transport/1.webp',
        medium: '../../../../../assets/images/1-building/transport/1.webp',
        big: '../../../../../assets/images/1-building/transport/1.webp'
      },
      {
        small: '../../../../../assets/images/1-building/transport/2.webp',
        medium: '../../../../../assets/images/1-building/transport/2.webp',
        big: '../../../../../assets/images/1-building/transport/2.webp'
      },
    ];
    this.images2 = [
      {
        small: '../../../../../assets/images/1-building/transport/parts/1.webp',
        medium: '../../../../../assets/images/1-building/transport/parts/1.webp',
        big: '../../../../../assets/images/1-building/transport/parts/1.webp'
      },
      {
        small: '../../../../../assets/images/1-building/transport/parts/2.webp',
        medium: '../../../../../assets/images/1-building/transport/parts/2.webp',
        big: '../../../../../assets/images/1-building/transport/parts/2.webp'
      },
      {
        small: '../../../../../assets/images/1-building/transport/parts/3.webp',
        medium: '../../../../../assets/images/1-building/transport/parts/3.webp',
        big: '../../../../../assets/images/1-building/transport/parts/3.webp'
      },
      {
        small: '../../../../../assets/images/1-building/transport/parts/4.webp',
        medium: '../../../../../assets/images/1-building/transport/parts/4.webp',
        big: '../../../../../assets/images/1-building/transport/parts/4.webp'
      },
    ];
    this.images3 = [
      {
        small: '../../../../../assets/images/1-building/transport/tegeta/1.webp',
        medium: '../../../../../assets/images/1-building/transport/tegeta/1.webp',
        big: '../../../../../assets/images/1-building/transport/tegeta/1.webp'
      },
      {
        small: '../../../../../assets/images/1-building/transport/tegeta/2.webp',
        medium: '../../../../../assets/images/1-building/transport/tegeta/2.webp',
        big: '../../../../../assets/images/1-building/transport/tegeta/2.webp'
      },
      {
        small: '../../../../../assets/images/1-building/transport/tegeta/3.webp',
        medium: '../../../../../assets/images/1-building/transport/tegeta/3.webp',
        big: '../../../../../assets/images/1-building/transport/tegeta/3.webp'
      },
      {
        small: '../../../../../assets/images/1-building/transport/tegeta/4.webp',
        medium: '../../../../../assets/images/1-building/transport/tegeta/4.webp',
        big: '../../../../../assets/images/1-building/transport/tegeta/4.webp'
      },
      {
        small: '../../../../../assets/images/1-building/transport/tegeta/5.webp',
        medium: '../../../../../assets/images/1-building/transport/tegeta/5.webp',
        big: '../../../../../assets/images/1-building/transport/tegeta/5.webp'
      },
    ];
    this.images4 = [
      {
        small: '../../../../../assets/images/1-building/transport/electro/1.webp',
        medium: '../../../../../assets/images/1-building/transport/electro/1.webp',
        big: '../../../../../assets/images/1-building/transport/electro/1.webp'
      },
      {
        small: '../../../../../assets/images/1-building/transport/electro/2.webp',
        medium: '../../../../../assets/images/1-building/transport/electro/2.webp',
        big: '../../../../../assets/images/1-building/transport/electro/2.webp'
      },
    ]
  }
}
