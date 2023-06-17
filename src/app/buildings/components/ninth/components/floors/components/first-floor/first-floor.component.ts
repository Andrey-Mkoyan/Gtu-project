import { Component } from '@angular/core';

@Component({
  selector: 'app-first-floor',
  templateUrl: './first-floor.component.html',
  styleUrls: ['./first-floor.component.scss']
})
export class FirstFloorComponent {
  images:any;
  constructor() {
    this.images =  [
      {
        small: '../../../../../../../../assets/images/9-building/1-1.webp',
        medium: '../../../../../../../../assets/images/9-building/1-1.webp',
        big: '../../../../../../../../assets/images/9-building/1-1.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/1-2.webp',
        medium: '../../../../../../../../assets/images/9-building/1-2.webp',
        big: '../../../../../../../../assets/images/9-building/1-2.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/1-3.webp',
        medium: '../../../../../../../../assets/images/9-building/1-3.webp',
        big: '../../../../../../../../assets/images/9-building/1-3.webp'
      },{
        small: '../../../../../../../../assets/images/9-building/1-4.webp',
        medium: '../../../../../../../../assets/images/9-building/1-4.webp',
        big: '../../../../../../../../assets/images/9-building/1-4.webp'
      }
    ];
  }
}