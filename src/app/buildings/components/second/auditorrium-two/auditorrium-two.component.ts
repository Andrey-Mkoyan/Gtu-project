import { Component } from '@angular/core';

@Component({
  selector: 'app-auditorrium-two',
  templateUrl: './auditorrium-two.component.html',
  styleUrls: ['./auditorrium-two.component.scss']
})
export class AuditorriumTwoComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/2-building/auditorium-two/1.jpg',
        medium: '../../../../../assets/images/2-building/auditorium-two/1.jpg',
        big: '../../../../../assets/images/2-building/auditorium-two/1.jpg'
      },
      {
        small: '../../../../../assets/images/2-building/auditorium-two/2.jpg',
        medium: '../../../../../assets/images/2-building/auditorium-two/2.jpg',
        big: '../../../../../assets/images/2-building/auditorium-two/2.jpg'
      },
    ]
  }
}
