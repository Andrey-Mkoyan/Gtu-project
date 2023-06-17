import { Component } from '@angular/core';

@Component({
  selector: 'app-heating-laboratory',
  templateUrl: './heating-laboratory.component.html',
  styleUrls: ['./heating-laboratory.component.scss']
})
export class HeatingLaboratoryComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/8-building/heating/1.webp',
        medium: '../../../../../assets/images/8-building/heating/1.webp',
        big: '../../../../../assets/images/8-building/heating/1.webp'
      },
      {
        small: '../../../../../assets/images/8-building/heating/2.webp',
        medium: '../../../../../assets/images/8-building/heating/2.webp',
        big: '../../../../../assets/images/8-building/heating/2.webp'
      },
      {
        small: '../../../../../assets/images/8-building/heating/3.webp',
        medium: '../../../../../assets/images/8-building/heating/3.webp',
        big: '../../../../../assets/images/8-building/heating/3.webp'
      },
      {
        small: '../../../../../assets/images/8-building/heating/4.webp',
        medium: '../../../../../assets/images/8-building/heating/4.webp',
        big: '../../../../../assets/images/8-building/heating/4.webp'
      },
      {
        small: '../../../../../assets/images/8-building/heating/5.webp',
        medium: '../../../../../assets/images/8-building/heating/5.webp',
        big: '../../../../../assets/images/8-building/heating/5.webp'
      },
      {
        small: '../../../../../assets/images/8-building/heating/6.webp',
        medium: '../../../../../assets/images/8-building/heating/6.webp',
        big: '../../../../../assets/images/8-building/heating/6.webp'
      },
    ]
  }
}
