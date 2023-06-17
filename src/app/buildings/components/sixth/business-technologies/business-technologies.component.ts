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
        small: '../../../../../assets/images/6-building/business/1.webp',
        medium: '../../../../../assets/images/6-building/business/1.webp',
        big: '../../../../../assets/images/6-building/business/1.webp'
      },
      {
        small: '../../../../../assets/images/6-building/business/2.webp',
        medium: '../../../../../assets/images/6-building/business/2.webp',
        big: '../../../../../assets/images/6-building/business/2.webp'
      },
      {
        small: '../../../../../assets/images/6-building/business/3.webp',
        medium: '../../../../../assets/images/6-building/business/3.webp',
        big: '../../../../../assets/images/6-building/business/3.webp'
      },
      {
        small: '../../../../../assets/images/6-building/business/4.webp',
        medium: '../../../../../assets/images/6-building/business/4.webp',
        big: '../../../../../assets/images/6-building/business/4.webp'
      },
      {
        small: '../../../../../assets/images/6-building/business/5.webp',
        medium: '../../../../../assets/images/6-building/business/5.webp',
        big: '../../../../../assets/images/6-building/business/5.webp'
      },
    ]
  }
}
