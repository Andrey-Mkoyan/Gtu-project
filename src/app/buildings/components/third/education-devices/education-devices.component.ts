import { Component } from '@angular/core';

@Component({
  selector: 'app-education-devices',
  templateUrl: './education-devices.component.html',
  styleUrls: ['./education-devices.component.scss']
})
export class EducationDevicesComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/3-building/practical-devices/1.webp',
        medium: '../../../../../assets/images/3-building/practical-devices/1.webp',
        big: '../../../../../assets/images/3-building/practical-devices/1.webp'
      },
      {
        small: '../../../../../assets/images/3-building/practical-devices/2.webp',
        medium: '../../../../../assets/images/3-building/practical-devices/2.webp',
        big: '../../../../../assets/images/3-building/practical-devices/2.webp'
      },
      {
        small: '../../../../../assets/images/3-building/practical-devices/3.webp',
        medium: '../../../../../assets/images/3-building/practical-devices/3.webp',
        big: '../../../../../assets/images/3-building/practical-devices/3.webp'
      },
      {
        small: '../../../../../assets/images/3-building/practical-devices/4.webp',
        medium: '../../../../../assets/images/3-building/practical-devices/4.webp',
        big: '../../../../../assets/images/3-building/practical-devices/4.webp'
      },
      {
        small: '../../../../../assets/images/3-building/practical-devices/5.webp',
        medium: '../../../../../assets/images/3-building/practical-devices/5.webp',
        big: '../../../../../assets/images/3-building/practical-devices/5.webp'
      },
      {
        small: '../../../../../assets/images/3-building/practical-devices/6.webp',
        medium: '../../../../../assets/images/3-building/practical-devices/6.webp',
        big: '../../../../../assets/images/3-building/practical-devices/6.webp'
      },
    ]
  }
}
