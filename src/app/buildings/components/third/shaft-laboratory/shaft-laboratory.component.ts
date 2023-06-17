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
        small: '../../../../../assets/images/3-building/shaft-laboratory/1.webp',
        medium: '../../../../../assets/images/3-building/shaft-laboratory/1.webp',
        big: '../../../../../assets/images/3-building/shaft-laboratory/1.webp'
      },
      {
        small: '../../../../../assets/images/3-building/shaft-laboratory/2.webp',
        medium: '../../../../../assets/images/3-building/shaft-laboratory/2.webp',
        big: '../../../../../assets/images/3-building/shaft-laboratory/2.webp'
      },
      {
        small: '../../../../../assets/images/3-building/shaft-laboratory/3.webp',
        medium: '../../../../../assets/images/3-building/shaft-laboratory/3.webp',
        big: '../../../../../assets/images/3-building/shaft-laboratory/3.webp'
      },
      {
        small: '../../../../../assets/images/3-building/shaft-laboratory/4.webp',
        medium: '../../../../../assets/images/3-building/shaft-laboratory/4.webp',
        big: '../../../../../assets/images/3-building/shaft-laboratory/4.webp'
      },
      {
        small: '../../../../../assets/images/3-building/shaft-laboratory/5.webp',
        medium: '../../../../../assets/images/3-building/shaft-laboratory/5.webp',
        big: '../../../../../assets/images/3-building/shaft-laboratory/5.webp'
      },
      {
        small: '../../../../../assets/images/3-building/shaft-laboratory/6.webp',
        medium: '../../../../../assets/images/3-building/shaft-laboratory/6.webp',
        big: '../../../../../assets/images/3-building/shaft-laboratory/6.webp'
      },
    ]
  }
}
