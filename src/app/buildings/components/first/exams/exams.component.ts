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
        small: '../../../../../assets/images/1-building/exams/1.webp',
        medium: '../../../../../assets/images/1-building/exams/1.webp',
        big: '../../../../../assets/images/1-building/exams/1.webp'
      },
      {
        small: '../../../../../assets/images/1-building/exams/2.webp',
        medium: '../../../../../assets/images/1-building/exams/2.webp',
        big: '../../../../../assets/images/1-building/exams/2.webp'
      },
      {
        small: '../../../../../assets/images/1-building/exams/3.webp',
        medium: '../../../../../assets/images/1-building/exams/3.webp',
        big: '../../../../../assets/images/1-building/exams/3.webp'
      },
      {
        small: '../../../../../assets/images/1-building/exams/4.webp',
        medium: '../../../../../assets/images/1-building/exams/4.webp',
        big: '../../../../../assets/images/1-building/exams/4.webp'
      },
    ]
  }
}
