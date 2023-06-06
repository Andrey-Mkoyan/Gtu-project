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
      small: '../../../../../assets/images/8-building/fusion-solar/1.jpg',
      medium: '../../../../../assets/images/8-building/fusion-solar/1.jpg',
      big: '../../../../../assets/images/8-building/fusion-solar/1.jpg'
    },
    {
      small: '../../../../../assets/images/8-building/fusion-solar/2.jpg',
      medium: '../../../../../assets/images/8-building/fusion-solar/2.jpg',
      big: '../../../../../assets/images/8-building/fusion-solar/2.jpg'
    },
    {
      small: '../../../../../assets/images/8-building/fusion-solar/3.jpg',
      medium: '../../../../../assets/images/8-building/fusion-solar/3.jpg',
      big: '../../../../../assets/images/8-building/fusion-solar/3.jpg'
    },
    {
      small: '../../../../../assets/images/8-building/fusion-solar/4.jpg',
      medium: '../../../../../assets/images/8-building/fusion-solar/4.jpg',
      big: '../../../../../assets/images/8-building/fusion-solar/4.jpg'
    },
    {
      small: '../../../../../assets/images/8-building/fusion-solar/5.jpg',
      medium: '../../../../../assets/images/8-building/fusion-solar/5.jpg',
      big: '../../../../../assets/images/8-building/fusion-solar/5.jpg'
    },
  ]
}
}
