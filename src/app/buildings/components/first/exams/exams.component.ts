import { Component } from '@angular/core';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/1-building/exams/1.jpg',
        medium: '../../../../../assets/images/1-building/exams/1.jpg',
        big: '../../../../../assets/images/1-building/exams/1.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/exams/2.jpg',
        medium: '../../../../../assets/images/1-building/exams/2.jpg',
        big: '../../../../../assets/images/1-building/exams/2.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/exams/3.jpg',
        medium: '../../../../../assets/images/1-building/exams/3.jpg',
        big: '../../../../../assets/images/1-building/exams/3.jpg'
      },
      {
        small: '../../../../../assets/images/1-building/exams/4.jpg',
        medium: '../../../../../assets/images/1-building/exams/4.jpg',
        big: '../../../../../assets/images/1-building/exams/4.jpg'
      },
    ]
  }
}
