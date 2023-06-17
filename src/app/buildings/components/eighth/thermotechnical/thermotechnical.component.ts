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
        small: '../../../../../assets/images/8-building/thermotechnical/1.webp',
        medium: '../../../../../assets/images/8-building/thermotechnical/1.webp',
        big: '../../../../../assets/images/8-building/thermotechnical/1.webp'
      },
      {
        small: '../../../../../assets/images/8-building/thermotechnical/2.webp',
        medium: '../../../../../assets/images/8-building/thermotechnical/2.webp',
        big: '../../../../../assets/images/8-building/thermotechnical/2.webp'
      },
      {
        small: '../../../../../assets/images/8-building/thermotechnical/3.webp',
        medium: '../../../../../assets/images/8-building/thermotechnical/3.webp',
        big: '../../../../../assets/images/8-building/thermotechnical/3.webp'
      },
    ]
  }
}
