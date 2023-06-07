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
        small: '../../../../../assets/images/3-building/mineralogy-and-petrography/1.jpg',
        medium: '../../../../../assets/images/3-building/mineralogy-and-petrography/1.jpg',
        big: '../../../../../assets/images/3-building/mineralogy-and-petrography/1.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/mineralogy-and-petrography/2.jpg',
        medium: '../../../../../assets/images/3-building/mineralogy-and-petrography/2.jpg',
        big: '../../../../../assets/images/3-building/mineralogy-and-petrography/2.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/mineralogy-and-petrography/3.jpg',
        medium: '../../../../../assets/images/3-building/mineralogy-and-petrography/3.jpg',
        big: '../../../../../assets/images/3-building/mineralogy-and-petrography/3.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/mineralogy-and-petrography/4.jpg',
        medium: '../../../../../assets/images/3-building/mineralogy-and-petrography/4.jpg',
        big: '../../../../../assets/images/3-building/mineralogy-and-petrography/4.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/mineralogy-and-petrography/5.jpg',
        medium: '../../../../../assets/images/3-building/mineralogy-and-petrography/5.jpg',
        big: '../../../../../assets/images/3-building/mineralogy-and-petrography/5.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/mineralogy-and-petrography/6.jpg',
        medium: '../../../../../assets/images/3-building/mineralogy-and-petrography/6.jpg',
        big: '../../../../../assets/images/3-building/mineralogy-and-petrography/6.jpg'
      },
    ]
  }
}
