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
        small: '../../../../../assets/images/8-building/consumption-technologies/1.jpg',
        medium: '../../../../../assets/images/8-building/consumption-technologies/1.jpg',
        big: '../../../../../assets/images/8-building/consumption-technologies/1.jpg'
      },
      {
        small: '../../../../../assets/images/8-building/consumption-technologies/2.jpg',
        medium: '../../../../../assets/images/8-building/consumption-technologies/2.jpg',
        big: '../../../../../assets/images/8-building/consumption-technologies/2.jpg'
      },
      {
        small: '../../../../../assets/images/8-building/consumption-technologies/3.jpg',
        medium: '../../../../../assets/images/8-building/consumption-technologies/3.jpg',
        big: '../../../../../assets/images/8-building/consumption-technologies/3.jpg'
      },
      {
        small: '../../../../../assets/images/8-building/consumption-technologies/4.jpg',
        medium: '../../../../../assets/images/8-building/consumption-technologies/4.jpg',
        big: '../../../../../assets/images/8-building/consumption-technologies/4.jpg'
      },
    ]
  }
}
