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
        small: '../../../../../../../../assets/images/9-building/1-სართული1.jpg',
        medium: '../../../../../../../../assets/images/9-building/1-სართული1.jpg',
        big: '../../../../../../../../assets/images/9-building/1-სართული1.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/1-სართული2.jpg',
        medium: '../../../../../../../../assets/images/9-building/1-სართული2.jpg',
        big: '../../../../../../../../assets/images/9-building/1-სართული2.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/1-სართული3.jpg',
        medium: '../../../../../../../../assets/images/9-building/1-სართული3.jpg',
        big: '../../../../../../../../assets/images/9-building/1-სართული3.jpg'
      },{
        small: '../../../../../../../../assets/images/9-building/1-სართული4.jpg',
        medium: '../../../../../../../../assets/images/9-building/1-სართული4.jpg',
        big: '../../../../../../../../assets/images/9-building/1-სართული4.jpg'
      }
    ];
  }
}