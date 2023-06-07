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
        small: '../../../../../assets/images/1-building/space/1.JPG',
        medium: '../../../../../assets/images/1-building/space/1.JPG',
        big: '../../../../../assets/images/1-building/space/1.JPG'
      },
      {
        small: '../../../../../assets/images/1-building/space/2.JPG',
        medium: '../../../../../assets/images/1-building/space/2.JPG',
        big: '../../../../../assets/images/1-building/space/2.JPG'
      },
      {
        small: '../../../../../assets/images/1-building/space/3.JPG',
        medium: '../../../../../assets/images/1-building/space/3.JPG',
        big: '../../../../../assets/images/1-building/space/3.JPG'
      },
    ]
  }
}
