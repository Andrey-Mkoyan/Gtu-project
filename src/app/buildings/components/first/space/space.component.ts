import { Component } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/1-building/space/1.webp',
        medium: '../../../../../assets/images/1-building/space/1.webp',
        big: '../../../../../assets/images/1-building/space/1.webp'
      },
      {
        small: '../../../../../assets/images/1-building/space/2.webp',
        medium: '../../../../../assets/images/1-building/space/2.webp',
        big: '../../../../../assets/images/1-building/space/2.webp'
      },
      {
        small: '../../../../../assets/images/1-building/space/3.webp',
        medium: '../../../../../assets/images/1-building/space/3.webp',
        big: '../../../../../assets/images/1-building/space/3.webp'
      },
    ]
  }
}
