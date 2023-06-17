import { Component } from '@angular/core';

@Component({
  selector: 'app-economy',
  templateUrl: './economy.component.html',
  styleUrls: ['./economy.component.scss']
})
export class EconomyComponent {
  images:any;
  images2:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/6-building/economy/1.webp',
        medium: '../../../../../assets/images/6-building/economy/1.webp',
        big: '../../../../../assets/images/6-building/economy/1.webp'
      },
      {
        small: '../../../../../assets/images/6-building/economy/2.webp',
        medium: '../../../../../assets/images/6-building/economy/2.webp',
        big: '../../../../../assets/images/6-building/economy/2.webp'
      },
    ]
    this.images2 = [
      {
        small: '../../../../../assets/images/6-building/economy/library/1.webp',
        medium: '../../../../../assets/images/6-building/economy/library/1.webp',
        big: '../../../../../assets/images/6-building/economy/library/1.webp'
      },
      {
        small: '../../../../../assets/images/6-building/economy/library/2.webp',
        medium: '../../../../../assets/images/6-building/economy/library/2.webp',
        big: '../../../../../assets/images/6-building/economy/library/2.webp'
      },
      {
        small: '../../../../../assets/images/6-building/economy/library/3.webp',
        medium: '../../../../../assets/images/6-building/economy/library/3.webp',
        big: '../../../../../assets/images/6-building/economy/library/3.webp'
      },
    ]

  }
}
