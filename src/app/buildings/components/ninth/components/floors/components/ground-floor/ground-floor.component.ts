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
        small: '../../../../../../assets/images/9-building/0-2.webp',
        medium: '../../../../../../assets/images/9-building/0-2.webp',
        big: '../../../../../../assets/images/9-building/0-2.webp'
      },
      {
        small: '../../../../../../assets/images/9-building/0-3.webp',
        medium: '../../../../../../assets/images/9-building/0-3.webp',
        big: '../../../../../../assets/images/9-building/0-3.webp'
      },
      {
        small: '../../../../../../assets/images/9-building/0-4.webp',
        medium: '../../../../../../assets/images/9-building/0-4.webp',
        big: '../../../../../../assets/images/9-building/0-4.webp'
      },
      {
        small: '../../../../../../assets/images/9-building/0-5.webp',
        medium: '../../../../../../assets/images/9-building/0-5.webp',
        big: '../../../../../../assets/images/9-building/0-5.webp'
      },
      {
        small: '../../../../../../assets/images/9-building/0-6.webp',
        medium: '../../../../../../assets/images/9-building/0-6.webp',
        big: '../../../../../../assets/images/9-building/0-6.webp'
      }
    ];
  }
}
