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
        small: '../../../../../assets/images/6-building/economy/1.jpg',
        medium: '../../../../../assets/images/6-building/economy/1.jpg',
        big: '../../../../../assets/images/6-building/economy/1.jpg'
      },
      {
        small: '../../../../../assets/images/6-building/economy/2.jpg',
        medium: '../../../../../assets/images/6-building/economy/2.jpg',
        big: '../../../../../assets/images/6-building/economy/2.jpg'
      },
    ]
    this.images2 = [
      {
        small: '../../../../../assets/images/6-building/economy/library/1.jpg',
        medium: '../../../../../assets/images/6-building/economy/library/1.jpg',
        big: '../../../../../assets/images/6-building/economy/library/1.jpg'
      },
      {
        small: '../../../../../assets/images/6-building/economy/library/2.jpg',
        medium: '../../../../../assets/images/6-building/economy/library/2.jpg',
        big: '../../../../../assets/images/6-building/economy/library/2.jpg'
      },
      {
        small: '../../../../../assets/images/6-building/economy/library/3.jpg',
        medium: '../../../../../assets/images/6-building/economy/library/3.jpg',
        big: '../../../../../assets/images/6-building/economy/library/3.jpg'
      },
    ]

  }
}
