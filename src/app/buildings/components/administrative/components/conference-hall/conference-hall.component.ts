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
        small: '../../../../../../assets/images/administrative/conference-hall/1.webp',
        medium: '../../../../../../assets/images/administrative/conference-hall/1.webp',
        big: '../../../../../../assets/images/administrative/conference-hall/1.webp'
      },
      {
        small: '../../../../../../assets/images/administrative/conference-hall/2.webp',
        medium: '../../../../../../assets/images/administrative/conference-hall/2.webp',
        big: '../../../../../../assets/images/administrative/conference-hall/2.webp'
      },
      {
        small: '../../../../../../assets/images/administrative/conference-hall/3.webp',
        medium: '../../../../../../assets/images/administrative/conference-hall/3.webp',
        big: '../../../../../../assets/images/administrative/conference-hall/3.webp'
      },
    ]
  }
}
