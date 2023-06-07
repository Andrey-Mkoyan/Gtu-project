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
        small: '../../../../../assets/images/3-building/practical-devices/1.jpg',
        medium: '../../../../../assets/images/3-building/practical-devices/1.jpg',
        big: '../../../../../assets/images/3-building/practical-devices/1.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/practical-devices/2.jpg',
        medium: '../../../../../assets/images/3-building/practical-devices/2.jpg',
        big: '../../../../../assets/images/3-building/practical-devices/2.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/practical-devices/3.jpg',
        medium: '../../../../../assets/images/3-building/practical-devices/3.jpg',
        big: '../../../../../assets/images/3-building/practical-devices/3.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/practical-devices/4.jpg',
        medium: '../../../../../assets/images/3-building/practical-devices/4.jpg',
        big: '../../../../../assets/images/3-building/practical-devices/4.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/practical-devices/5.jpg',
        medium: '../../../../../assets/images/3-building/practical-devices/5.jpg',
        big: '../../../../../assets/images/3-building/practical-devices/5.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/practical-devices/6.jpg',
        medium: '../../../../../assets/images/3-building/practical-devices/6.jpg',
        big: '../../../../../assets/images/3-building/practical-devices/6.jpg'
      },
    ]
  }
}
