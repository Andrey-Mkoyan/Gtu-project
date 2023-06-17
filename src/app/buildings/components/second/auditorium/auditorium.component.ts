import { Component } from '@angular/core';

@Component({
  selector: 'app-auditorium',
  templateUrl: './auditorium.component.html',
  styleUrls: ['./auditorium.component.scss']
})
export class AuditoriumComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/2-building/auditorium/1.webp',
        medium: '../../../../../assets/images/2-building/auditorium/1.webp',
        big: '../../../../../assets/images/2-building/auditorium/1.webp'
      },
      {
        small: '../../../../../assets/images/2-building/auditorium/2.webp',
        medium: '../../../../../assets/images/2-building/auditorium/2.webp',
        big: '../../../../../assets/images/2-building/auditorium/2.webp'
      },
      {
        small: '../../../../../assets/images/2-building/auditorium/3.webp',
        medium: '../../../../../assets/images/2-building/auditorium/3.webp',
        big: '../../../../../assets/images/2-building/auditorium/3.webp'
      },
      {
        small: '../../../../../assets/images/2-building/auditorium/4.webp',
        medium: '../../../../../assets/images/2-building/auditorium/4.webp',
        big: '../../../../../assets/images/2-building/auditorium/4.webp'
      },
    ]
  }
}
