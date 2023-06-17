import { Component } from '@angular/core';

@Component({
  selector: 'app-fusion-solar',
  templateUrl: './fusion-solar.component.html',
  styleUrls: ['./fusion-solar.component.scss']
})
export class FusionSolarComponent {
images:any;
constructor() {
  this.images = [
    {
      small: '../../../../../assets/images/8-building/fusion-solar/1.webp',
      medium: '../../../../../assets/images/8-building/fusion-solar/1.webp',
      big: '../../../../../assets/images/8-building/fusion-solar/1.webp'
    },
    {
      small: '../../../../../assets/images/8-building/fusion-solar/2.webp',
      medium: '../../../../../assets/images/8-building/fusion-solar/2.webp',
      big: '../../../../../assets/images/8-building/fusion-solar/2.webp'
    },
    {
      small: '../../../../../assets/images/8-building/fusion-solar/3.webp',
      medium: '../../../../../assets/images/8-building/fusion-solar/3.webp',
      big: '../../../../../assets/images/8-building/fusion-solar/3.webp'
    },
    {
      small: '../../../../../assets/images/8-building/fusion-solar/4.webp',
      medium: '../../../../../assets/images/8-building/fusion-solar/4.webp',
      big: '../../../../../assets/images/8-building/fusion-solar/4.webp'
    },
    {
      small: '../../../../../assets/images/8-building/fusion-solar/5.webp',
      medium: '../../../../../assets/images/8-building/fusion-solar/5.webp',
      big: '../../../../../assets/images/8-building/fusion-solar/5.webp'
    },
  ]
}
}
