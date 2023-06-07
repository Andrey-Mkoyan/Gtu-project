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
        small: '../../../../assets/images/6-building/1-floor/1.jpg',
        medium: '../../../../assets/images/6-building/1-floor/1.jpg',
        big: '../../../../assets/images/6-building/1-floor/1.jpg'
      },
      {
        small: '../../../../assets/images/6-building/1-floor/2.jpg',
        medium: '../../../../assets/images/6-building/1-floor/2.jpg',
        big: '../../../../assets/images/6-building/1-floor/2.jpg'
      },
      {
        small: '../../../../assets/images/6-building/1-floor/3.jpg',
        medium: '../../../../assets/images/6-building/1-floor/3.jpg',
        big: '../../../../assets/images/6-building/1-floor/3.jpg'
      },
      {
        small: '../../../../assets/images/6-building/1-floor/4.jpg',
        medium: '../../../../assets/images/6-building/1-floor/4.jpg',
        big: '../../../../assets/images/6-building/1-floor/4.jpg'
      },
      {
        small: '../../../../assets/images/6-building/1-floor/5.jpg',
        medium: '../../../../assets/images/6-building/1-floor/5.jpg',
        big: '../../../../assets/images/6-building/1-floor/5.jpg'
      },
    ]
  }
}
