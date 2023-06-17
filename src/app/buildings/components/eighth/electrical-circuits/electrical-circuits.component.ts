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
        small: '../../../../../assets/images/8-building/electrical-circuits/1.webp',
        medium: '../../../../../assets/images/8-building/electrical-circuits/1.webp',
        big: '../../../../../assets/images/8-building/electrical-circuits/1.webp'
      },
      {
        small: '../../../../../assets/images/8-building/electrical-circuits/2.webp',
        medium: '../../../../../assets/images/8-building/electrical-circuits/2.webp',
        big: '../../../../../assets/images/8-building/electrical-circuits/2.webp'
      },
      {
        small: '../../../../../assets/images/8-building/electrical-circuits/3.webp',
        medium: '../../../../../assets/images/8-building/electrical-circuits/3.webp',
        big: '../../../../../assets/images/8-building/electrical-circuits/3.webp'
      },
      {
        small: '../../../../../assets/images/8-building/electrical-circuits/4.webp',
        medium: '../../../../../assets/images/8-building/electrical-circuits/4.webp',
        big: '../../../../../assets/images/8-building/electrical-circuits/4.webp'
      },
      {
        small: '../../../../../assets/images/8-building/electrical-circuits/5.webp',
        medium: '../../../../../assets/images/8-building/electrical-circuits/5.webp',
        big: '../../../../../assets/images/8-building/electrical-circuits/5.webp'
      },
    ]
  }
}
