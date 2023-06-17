import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent {
  images:any;
  constructor() {
    this.images= [
      {
        small: '../../../../assets/images/4-building/5.webp',
        medium: '../../../../assets/images/4-building/5.webp',
        big: '../../../../assets/images/4-building/5.webp'
      },
      {
        small: '../../../../assets/images/4-building/6.webp',
        medium: '../../../../assets/images/4-building/6.webp',
        big: '../../../../assets/images/4-building/6.webp'
      },
      {
        small: '../../../../assets/images/4-building/7.webp',
        medium: '../../../../assets/images/4-building/7.webp',
        big: '../../../../assets/images/4-building/7.webp'
      },
      {
        small: '../../../../assets/images/4-building/8.webp',
        medium: '../../../../assets/images/4-building/8.webp',
        big: '../../../../assets/images/4-building/8.webp'
      },
      {
        small: '../../../../assets/images/4-building/1.webp',
        medium: '../../../../assets/images/4-building/1.webp',
        big: '../../../../assets/images/4-building/1.webp'
      },
      {
        small: '../../../../assets/images/4-building/3.webp',
        medium: '../../../../assets/images/4-building/3.webp',
        big: '../../../../assets/images/4-building/3.webp'
      },
      {
        small: '../../../../assets/images/4-building/4.webp',
        medium: '../../../../assets/images/4-building/4.webp',
        big: '../../../../assets/images/4-building/4.webp'
      },
      
     
    ]
  }
}
