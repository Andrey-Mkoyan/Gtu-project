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
        small: '../../../../../assets/images/2-building/auditorium/1.jpg',
        medium: '../../../../../assets/images/2-building/auditorium/1.jpg',
        big: '../../../../../assets/images/2-building/auditorium/1.jpg'
      },
      {
        small: '../../../../../assets/images/2-building/auditorium/2.jpg',
        medium: '../../../../../assets/images/2-building/auditorium/2.jpg',
        big: '../../../../../assets/images/2-building/auditorium/2.jpg'
      },
      {
        small: '../../../../../assets/images/2-building/auditorium/3.jpg',
        medium: '../../../../../assets/images/2-building/auditorium/3.jpg',
        big: '../../../../../assets/images/2-building/auditorium/3.jpg'
      },
      {
        small: '../../../../../assets/images/2-building/auditorium/4.jpg',
        medium: '../../../../../assets/images/2-building/auditorium/4.jpg',
        big: '../../../../../assets/images/2-building/auditorium/4.jpg'
      },
    ]
  }
}
