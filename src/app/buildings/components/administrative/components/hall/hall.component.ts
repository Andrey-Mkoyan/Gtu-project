import { Component } from '@angular/core';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../../assets/images/administrative/hall/1.jpg',
        medium: '../../../../../../assets/images/administrative/hall/1.jpg',
        big: '../../../../../../assets/images/administrative/hall/1.jpg'
      },
      {
        small: '../../../../../../assets/images/administrative/hall/2.jpg',
        medium: '../../../../../../assets/images/administrative/hall/2.jpg',
        big: '../../../../../../assets/images/administrative/hall/2.jpg'
      },
      {
        small: '../../../../../../assets/images/administrative/hall/3.jpg',
        medium: '../../../../../../assets/images/administrative/hall/3.jpg',
        big: '../../../../../../assets/images/administrative/hall/3.jpg'
      },
    ]
  }
}
