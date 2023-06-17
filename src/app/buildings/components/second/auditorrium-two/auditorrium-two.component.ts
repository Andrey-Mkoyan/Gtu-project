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
        small: '../../../../../assets/images/2-building/auditorium-two/1.webp',
        medium: '../../../../../assets/images/2-building/auditorium-two/1.webp',
        big: '../../../../../assets/images/2-building/auditorium-two/1.webp'
      },
      {
        small: '../../../../../assets/images/2-building/auditorium-two/2.webp',
        medium: '../../../../../assets/images/2-building/auditorium-two/2.webp',
        big: '../../../../../assets/images/2-building/auditorium-two/2.webp'
      },
    ]
  }
}
