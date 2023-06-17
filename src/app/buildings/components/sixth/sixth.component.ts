import { Component } from '@angular/core';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.scss']
})
export class SixthComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../assets/images/6-building/1-floor/1.webp',
        medium: '../../../../assets/images/6-building/1-floor/1.webp',
        big: '../../../../assets/images/6-building/1-floor/1.webp'
      },
      {
        small: '../../../../assets/images/6-building/1-floor/2.webp',
        medium: '../../../../assets/images/6-building/1-floor/2.webp',
        big: '../../../../assets/images/6-building/1-floor/2.webp'
      },
      {
        small: '../../../../assets/images/6-building/1-floor/3.webp',
        medium: '../../../../assets/images/6-building/1-floor/3.webp',
        big: '../../../../assets/images/6-building/1-floor/3.webp'
      },
      {
        small: '../../../../assets/images/6-building/1-floor/4.webp',
        medium: '../../../../assets/images/6-building/1-floor/4.webp',
        big: '../../../../assets/images/6-building/1-floor/4.webp'
      },
      {
        small: '../../../../assets/images/6-building/1-floor/5.webp',
        medium: '../../../../assets/images/6-building/1-floor/5.webp',
        big: '../../../../assets/images/6-building/1-floor/5.webp'
      },
    ]
  }
}
