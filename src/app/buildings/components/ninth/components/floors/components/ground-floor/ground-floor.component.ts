import { Component } from '@angular/core';

@Component({
  selector: 'app-ground-floor',
  templateUrl: './ground-floor.component.html',
  styleUrls: ['./ground-floor.component.scss']
})
export class GroundFloorComponent {
  images: any;
  constructor() {
    this.images = [
      {
        small: '../../../../../../../../assets/images/9-building/1-1.jpg',
        medium: '../../../../../../../../assets/images/9-building/1-1.jpg',
        big: '../../../../../../../../assets/images/9-building/1-1.jpg'
      },
      {
        small: '../../../../../../assets/images/9-building/0-2.jpg',
        medium: '../../../../../../assets/images/9-building/0-2.jpg',
        big: '../../../../../../assets/images/9-building/0-2.jpg'
      },
      {
        small: '../../../../../../assets/images/9-building/0-3.jpg',
        medium: '../../../../../../assets/images/9-building/0-3.jpg',
        big: '../../../../../../assets/images/9-building/0-3.jpg'
      },
      {
        small: '../../../../../../assets/images/9-building/0-4.jpg',
        medium: '../../../../../../assets/images/9-building/0-4.jpg',
        big: '../../../../../../assets/images/9-building/0-4.jpg'
      },
      {
        small: '../../../../../../assets/images/9-building/0-5.jpg',
        medium: '../../../../../../assets/images/9-building/0-5.jpg',
        big: '../../../../../../assets/images/9-building/0-5.jpg'
      },
      {
        small: '../../../../../../assets/images/9-building/0-6.jpg',
        medium: '../../../../../../assets/images/9-building/0-6.jpg',
        big: '../../../../../../assets/images/9-building/0-6.jpg'
      }
    ];
  }
}
