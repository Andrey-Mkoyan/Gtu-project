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
        small: '../../../../../assets/images/1-building/space/1.jpg',
        medium: '../../../../../assets/images/1-building/space/1.jpg',
        big: '../../../../../assets/images/1-building/space/1.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/space/2.jpg',
        medium: '../../../../../assets/images/1-building/space/2.jpg',
        big: '../../../../../assets/images/1-building/space/2.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/space/3.jpg',
        medium: '../../../../../assets/images/1-building/space/3.jpg',
        big: '../../../../../assets/images/1-building/space/3.jpg'
      },
    ]
  }
}
