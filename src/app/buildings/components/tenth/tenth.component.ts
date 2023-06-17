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
        small: '../../../../assets/images/10-building/1.webp',
        medium: '../../../../assets/images/10-building/1.webp',
        big: '../../../../assets/images/10-building/1.webp'
      },
      {
        small: '../../../../assets/images/10-building/2.webp',
        medium: '../../../../assets/images/10-building/2.webp',
        big: '../../../../assets/images/10-building/2.webp'
      },
      {
        small: '../../../../assets/images/10-building/3.webp',
        medium: '../../../../assets/images/10-building/3.webp',
        big: '../../../../assets/images/10-building/3.webp'
      },
      {
        small: '../../../../assets/images/10-building/4.webp',
        medium: '../../../../assets/images/10-building/4.webp',
        big: '../../../../assets/images/10-building/4.webp'
      },
      {
        small: '../../../../assets/images/10-building/5.webp',
        medium: '../../../../assets/images/10-building/5.webp',
        big: '../../../../assets/images/10-building/5.webp'
      },
      {
        small: '../../../../assets/images/10-building/6.webp',
        medium: '../../../../assets/images/10-building/6.webp',
        big: '../../../../assets/images/10-building/6.webp'
      },
    ]
  }
}
