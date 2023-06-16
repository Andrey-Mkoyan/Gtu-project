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
        small: '../../../../../../../../assets/images/9-building/1-1.jpg',
        medium: '../../../../../../../../assets/images/9-building/1-1.jpg',
        big: '../../../../../../../../assets/images/9-building/1-1.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/1-2.jpg',
        medium: '../../../../../../../../assets/images/9-building/1-2.jpg',
        big: '../../../../../../../../assets/images/9-building/1-2.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/1-3.jpg',
        medium: '../../../../../../../../assets/images/9-building/1-3.jpg',
        big: '../../../../../../../../assets/images/9-building/1-3.jpg'
      },{
        small: '../../../../../../../../assets/images/9-building/1-4.jpg',
        medium: '../../../../../../../../assets/images/9-building/1-4.jpg',
        big: '../../../../../../../../assets/images/9-building/1-4.jpg'
      }
    ];
  }
}