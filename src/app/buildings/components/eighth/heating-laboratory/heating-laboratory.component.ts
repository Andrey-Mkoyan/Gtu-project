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
        small: '../../../../../assets/images/8-building/heating/1.jpg',
        medium: '../../../../../assets/images/8-building/heating/1.jpg',
        big: '../../../../../assets/images/8-building/heating/1.jpg'
      },
      {
        small: '../../../../../assets/images/8-building/heating/2.jpg',
        medium: '../../../../../assets/images/8-building/heating/2.jpg',
        big: '../../../../../assets/images/8-building/heating/2.jpg'
      },
      {
        small: '../../../../../assets/images/8-building/heating/3.jpg',
        medium: '../../../../../assets/images/8-building/heating/3.jpg',
        big: '../../../../../assets/images/8-building/heating/3.jpg'
      },
      {
        small: '../../../../../assets/images/8-building/heating/4.jpg',
        medium: '../../../../../assets/images/8-building/heating/4.jpg',
        big: '../../../../../assets/images/8-building/heating/4.jpg'
      },
      {
        small: '../../../../../assets/images/8-building/heating/5.jpg',
        medium: '../../../../../assets/images/8-building/heating/5.jpg',
        big: '../../../../../assets/images/8-building/heating/5.jpg'
      },
      {
        small: '../../../../../assets/images/8-building/heating/6.jpg',
        medium: '../../../../../assets/images/8-building/heating/6.jpg',
        big: '../../../../../assets/images/8-building/heating/6.jpg'
      },
    ]
  }
}
