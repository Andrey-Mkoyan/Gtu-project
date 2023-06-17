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
        small: '../../../../../../assets/images/administrative/hall/1.webp',
        medium: '../../../../../../assets/images/administrative/hall/1.webp',
        big: '../../../../../../assets/images/administrative/hall/1.webp'
      },
      {
        small: '../../../../../../assets/images/administrative/hall/2.webp',
        medium: '../../../../../../assets/images/administrative/hall/2.webp',
        big: '../../../../../../assets/images/administrative/hall/2.webp'
      },
      {
        small: '../../../../../../assets/images/administrative/hall/3.webp',
        medium: '../../../../../../assets/images/administrative/hall/3.webp',
        big: '../../../../../../assets/images/administrative/hall/3.webp'
      },
    ]
  }
}
