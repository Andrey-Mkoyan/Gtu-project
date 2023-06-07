import { Component } from '@angular/core';

@Component({
  selector: 'app-information-technology',
  templateUrl: './information-technology.component.html',
  styleUrls: ['./information-technology.component.scss']
})
export class InformationTechnologyComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/6-building/information/1.jpg',
        medium: '../../../../../assets/images/6-building/information/1.jpg',
        big: '../../../../../assets/images/6-building/information/1.jpg'
      },
      {
        small: '../../../../../assets/images/6-building/information/2.jpg',
        medium: '../../../../../assets/images/6-building/information/2.jpg',
        big: '../../../../../assets/images/6-building/information/2.jpg'
      },
      {
        small: '../../../../../assets/images/6-building/information/3.jpg',
        medium: '../../../../../assets/images/6-building/information/3.jpg',
        big: '../../../../../assets/images/6-building/information/3.jpg'
      },
    ]
  }
}
