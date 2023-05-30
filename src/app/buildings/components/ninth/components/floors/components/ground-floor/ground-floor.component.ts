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
        small: '../../../../../../../../assets/images/9-building/1-სართული1.jpg',
        medium: '../../../../../../../../assets/images/9-building/1-სართული1.jpg',
        big: '../../../../../../../../assets/images/9-building/1-სართული1.jpg'
      },
      {
        small: '../../../../../../assets/images/9-building/0-სართული2.jpg',
        medium: '../../../../../../assets/images/9-building/0-სართული2.jpg',
        big: '../../../../../../assets/images/9-building/0-სართული2.jpg'
      },
      {
        small: '../../../../../../assets/images/9-building/0-სართული3.jpg',
        medium: '../../../../../../assets/images/9-building/0-სართული3.jpg',
        big: '../../../../../../assets/images/9-building/0-სართული3.jpg'
      },
      {
        small: '../../../../../../assets/images/9-building/0-სართული4.jpg',
        medium: '../../../../../../assets/images/9-building/0-სართული4.jpg',
        big: '../../../../../../assets/images/9-building/0-სართული4.jpg'
      },
      {
        small: '../../../../../../assets/images/9-building/0-სართული5.jpg',
        medium: '../../../../../../assets/images/9-building/0-სართული5.jpg',
        big: '../../../../../../assets/images/9-building/0-სართული5.jpg'
      },
      {
        small: '../../../../../../assets/images/9-building/0-სართული6.jpg',
        medium: '../../../../../../assets/images/9-building/0-სართული6.jpg',
        big: '../../../../../../assets/images/9-building/0-სართული6.jpg'
      }
    ];
  }
}
