import { Component } from '@angular/core';

@Component({
  selector: 'app-business-technologies',
  templateUrl: './business-technologies.component.html',
  styleUrls: ['./business-technologies.component.scss']
})
export class BusinessTechnologiesComponent {
  images:any;
  constructor(){
    this.images = [
      {
        small: '../../../../../assets/images/6-building/business/1.jpg',
        medium: '../../../../../assets/images/6-building/business/1.jpg',
        big: '../../../../../assets/images/6-building/business/1.jpg'
      },
      {
        small: '../../../../../assets/images/6-building/business/2.jpg',
        medium: '../../../../../assets/images/6-building/business/2.jpg',
        big: '../../../../../assets/images/6-building/business/2.jpg'
      },
      {
        small: '../../../../../assets/images/6-building/business/3.jpg',
        medium: '../../../../../assets/images/6-building/business/3.jpg',
        big: '../../../../../assets/images/6-building/business/3.jpg'
      },
      {
        small: '../../../../../assets/images/6-building/business/4.jpg',
        medium: '../../../../../assets/images/6-building/business/4.jpg',
        big: '../../../../../assets/images/6-building/business/4.jpg'
      },
      {
        small: '../../../../../assets/images/6-building/business/5.jpg',
        medium: '../../../../../assets/images/6-building/business/5.jpg',
        big: '../../../../../assets/images/6-building/business/5.jpg'
      },
    ]
  }
}
