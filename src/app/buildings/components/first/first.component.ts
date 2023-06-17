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
        small: '../../../../assets/images/1-building/1.webp',
        medium: '../../../../assets/images/1-building/1.webp',
        big: '../../../../assets/images/1-building/1.webp'
      },
      {
        small: '../../../../assets/images/1-building/2.webp',
        medium: '../../../../assets/images/1-building/2.webp',
        big: '../../../../assets/images/1-building/2.webp'
      },
      {
        small: '../../../../assets/images/1-building/3.webp',
        medium: '../../../../assets/images/1-building/3.webp',
        big: '../../../../assets/images/1-building/3.webp'
      },
      {
        small: '../../../../assets/images/1-building/4.webp',
        medium: '../../../../assets/images/1-building/4.webp',
        big: '../../../../assets/images/1-building/4.webp'
      },
      {
        small: '../../../../assets/images/1-building/5.webp',
        medium: '../../../../assets/images/1-building/5.webp',
        big: '../../../../assets/images/1-building/5.webp'
      },
    ]
  }
}
