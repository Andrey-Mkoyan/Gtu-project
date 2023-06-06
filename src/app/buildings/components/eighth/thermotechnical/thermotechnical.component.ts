import { Component } from '@angular/core';

@Component({
  selector: 'app-thermotechnical',
  templateUrl: './thermotechnical.component.html',
  styleUrls: ['./thermotechnical.component.scss']
})
export class ThermotechnicalComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/8-building/thermotechnical/1.jpg',
        medium: '../../../../../assets/images/8-building/thermotechnical/1.jpg',
        big: '../../../../../assets/images/8-building/thermotechnical/1.jpg'
      },
      {
        small: '../../../../../assets/images/8-building/thermotechnical/2.jpg',
        medium: '../../../../../assets/images/8-building/thermotechnical/2.jpg',
        big: '../../../../../assets/images/8-building/thermotechnical/2.jpg'
      },
      {
        small: '../../../../../assets/images/8-building/thermotechnical/3.jpg',
        medium: '../../../../../assets/images/8-building/thermotechnical/3.jpg',
        big: '../../../../../assets/images/8-building/thermotechnical/3.jpg'
      },
    ]
  }
}
