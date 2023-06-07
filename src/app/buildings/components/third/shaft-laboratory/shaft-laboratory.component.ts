import { Component } from '@angular/core';

@Component({
  selector: 'app-shaft-laboratory',
  templateUrl: './shaft-laboratory.component.html',
  styleUrls: ['./shaft-laboratory.component.scss']
})
export class ShaftLaboratoryComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/3-building/shaft-laboratory/1.jpg',
        medium: '../../../../../assets/images/3-building/shaft-laboratory/1.jpg',
        big: '../../../../../assets/images/3-building/shaft-laboratory/1.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/shaft-laboratory/2.jpg',
        medium: '../../../../../assets/images/3-building/shaft-laboratory/2.jpg',
        big: '../../../../../assets/images/3-building/shaft-laboratory/2.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/shaft-laboratory/3.jpg',
        medium: '../../../../../assets/images/3-building/shaft-laboratory/3.jpg',
        big: '../../../../../assets/images/3-building/shaft-laboratory/3.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/shaft-laboratory/4.jpg',
        medium: '../../../../../assets/images/3-building/shaft-laboratory/4.jpg',
        big: '../../../../../assets/images/3-building/shaft-laboratory/4.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/shaft-laboratory/5.jpg',
        medium: '../../../../../assets/images/3-building/shaft-laboratory/5.jpg',
        big: '../../../../../assets/images/3-building/shaft-laboratory/5.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/shaft-laboratory/6.jpg',
        medium: '../../../../../assets/images/3-building/shaft-laboratory/6.jpg',
        big: '../../../../../assets/images/3-building/shaft-laboratory/6.jpg'
      },
    ]
  }
}
