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
        small: '../../../../assets/images/8-building/1.webp',
        medium: '../../../../assets/images/8-building/1.webp',
        big: '../../../../assets/images/8-building/1.webp'
      },
      {
        small: '../../../../assets/images/8-building/2.webp',
        medium: '../../../../assets/images/8-building/2.webp',
        big: '../../../../assets/images/8-building/2.webp'
      },
      {
        small: '../../../../assets/images/8-building/3.webp',
        medium: '../../../../assets/images/8-building/3.webp',
        big: '../../../../assets/images/8-building/3.webp'
      },
      {
        small: '../../../../assets/images/8-building/4.webp',
        medium: '../../../../assets/images/8-building/4.webp',
        big: '../../../../assets/images/8-building/4.webp'
      },
      {
        small: '../../../../assets/images/8-building/5.webp',
        medium: '../../../../assets/images/8-building/5.webp',
        big: '../../../../assets/images/8-building/5.webp'
      },
      {
        small: '../../../../assets/images/8-building/6.webp',
        medium: '../../../../assets/images/8-building/6.webp',
        big: '../../../../assets/images/8-building/6.webp'
      },
      {
        small: '../../../../assets/images/8-building/7.webp',
        medium: '../../../../assets/images/8-building/7.webp',
        big: '../../../../assets/images/8-building/7.webp'
      },
    ]
  }
}
