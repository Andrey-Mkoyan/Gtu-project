import { Component } from '@angular/core';

@Component({
  selector: 'app-conference-hall',
  templateUrl: './conference-hall.component.html',
  styleUrls: ['./conference-hall.component.scss']
})
export class ConferenceHallComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../../assets/images/administrative/conference-hall/1.jpg',
        medium: '../../../../../../assets/images/administrative/conference-hall/1.jpg',
        big: '../../../../../../assets/images/administrative/conference-hall/1.jpg'
      },
      {
        small: '../../../../../../assets/images/administrative/conference-hall/2.jpg',
        medium: '../../../../../../assets/images/administrative/conference-hall/2.jpg',
        big: '../../../../../../assets/images/administrative/conference-hall/2.jpg'
      },
      {
        small: '../../../../../../assets/images/administrative/conference-hall/3.jpg',
        medium: '../../../../../../assets/images/administrative/conference-hall/3.jpg',
        big: '../../../../../../assets/images/administrative/conference-hall/3.jpg'
      },
    ]
  }
}
