import { Component } from '@angular/core';

@Component({
  selector: 'app-electrical-circuits',
  templateUrl: './electrical-circuits.component.html',
  styleUrls: ['./electrical-circuits.component.scss']
})
export class ElectricalCircuitsComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/8-building/electrical-circuits/1.jpg',
        medium: '../../../../../assets/images/8-building/electrical-circuits/1.jpg',
        big: '../../../../../assets/images/8-building/electrical-circuits/1.jpg'
      },
      {
        small: '../../../../../assets/images/8-building/electrical-circuits/2.jpg',
        medium: '../../../../../assets/images/8-building/electrical-circuits/2.jpg',
        big: '../../../../../assets/images/8-building/electrical-circuits/2.jpg'
      },
      {
        small: '../../../../../assets/images/8-building/electrical-circuits/3.jpg',
        medium: '../../../../../assets/images/8-building/electrical-circuits/3.jpg',
        big: '../../../../../assets/images/8-building/electrical-circuits/3.jpg'
      },
      {
        small: '../../../../../assets/images/8-building/electrical-circuits/4.jpg',
        medium: '../../../../../assets/images/8-building/electrical-circuits/4.jpg',
        big: '../../../../../assets/images/8-building/electrical-circuits/4.jpg'
      },
      {
        small: '../../../../../assets/images/8-building/electrical-circuits/5.jpg',
        medium: '../../../../../assets/images/8-building/electrical-circuits/5.jpg',
        big: '../../../../../assets/images/8-building/electrical-circuits/5.jpg'
      },
    ]
  }
}
