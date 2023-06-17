import { Component } from '@angular/core';

@Component({
  selector: 'app-mineralogy-and-petrography',
  templateUrl: './mineralogy-and-petrography.component.html',
  styleUrls: ['./mineralogy-and-petrography.component.scss']
})
export class MineralogyAndPetrographyComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/3-building/mineralogy-and-petrography/1.webp',
        medium: '../../../../../assets/images/3-building/mineralogy-and-petrography/1.webp',
        big: '../../../../../assets/images/3-building/mineralogy-and-petrography/1.webp'
      },
      {
        small: '../../../../../assets/images/3-building/mineralogy-and-petrography/2.webp',
        medium: '../../../../../assets/images/3-building/mineralogy-and-petrography/2.webp',
        big: '../../../../../assets/images/3-building/mineralogy-and-petrography/2.webp'
      },
      {
        small: '../../../../../assets/images/3-building/mineralogy-and-petrography/3.webp',
        medium: '../../../../../assets/images/3-building/mineralogy-and-petrography/3.webp',
        big: '../../../../../assets/images/3-building/mineralogy-and-petrography/3.webp'
      },
      {
        small: '../../../../../assets/images/3-building/mineralogy-and-petrography/4.webp',
        medium: '../../../../../assets/images/3-building/mineralogy-and-petrography/4.webp',
        big: '../../../../../assets/images/3-building/mineralogy-and-petrography/4.webp'
      },
      {
        small: '../../../../../assets/images/3-building/mineralogy-and-petrography/5.webp',
        medium: '../../../../../assets/images/3-building/mineralogy-and-petrography/5.webp',
        big: '../../../../../assets/images/3-building/mineralogy-and-petrography/5.webp'
      },
      {
        small: '../../../../../assets/images/3-building/mineralogy-and-petrography/6.webp',
        medium: '../../../../../assets/images/3-building/mineralogy-and-petrography/6.webp',
        big: '../../../../../assets/images/3-building/mineralogy-and-petrography/6.webp'
      },
    ]
  }
}
