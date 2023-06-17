import { Component } from '@angular/core';

@Component({
  selector: 'app-consumption-technologies',
  templateUrl: './consumption-technologies.component.html',
  styleUrls: ['./consumption-technologies.component.scss']
})
export class ConsumptionTechnologiesComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/8-building/consumption-technologies/1.webp',
        medium: '../../../../../assets/images/8-building/consumption-technologies/1.webp',
        big: '../../../../../assets/images/8-building/consumption-technologies/1.webp'
      },
      {
        small: '../../../../../assets/images/8-building/consumption-technologies/2.webp',
        medium: '../../../../../assets/images/8-building/consumption-technologies/2.webp',
        big: '../../../../../assets/images/8-building/consumption-technologies/2.webp'
      },
      {
        small: '../../../../../assets/images/8-building/consumption-technologies/3.webp',
        medium: '../../../../../assets/images/8-building/consumption-technologies/3.webp',
        big: '../../../../../assets/images/8-building/consumption-technologies/3.webp'
      },
      {
        small: '../../../../../assets/images/8-building/consumption-technologies/4.webp',
        medium: '../../../../../assets/images/8-building/consumption-technologies/4.webp',
        big: '../../../../../assets/images/8-building/consumption-technologies/4.webp'
      },
    ]
  }
}
