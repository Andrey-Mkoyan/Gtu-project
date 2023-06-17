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
        small: '../../../../../assets/images/6-building/information/1.webp',
        medium: '../../../../../assets/images/6-building/information/1.webp',
        big: '../../../../../assets/images/6-building/information/1.webp'
      },
      {
        small: '../../../../../assets/images/6-building/information/2.webp',
        medium: '../../../../../assets/images/6-building/information/2.webp',
        big: '../../../../../assets/images/6-building/information/2.webp'
      },
      {
        small: '../../../../../assets/images/6-building/information/3.webp',
        medium: '../../../../../assets/images/6-building/information/3.webp',
        big: '../../../../../assets/images/6-building/information/3.webp'
      },
    ]
  }
}
