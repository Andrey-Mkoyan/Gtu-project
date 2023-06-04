import { Component } from '@angular/core';

@Component({
  selector: 'app-third-floor',
  templateUrl: './third-floor.component.html',
  styleUrls: ['./third-floor.component.scss']
})
export class ThirdFloorComponent {
  images:any;
  images2:any;
  images3:any;
  images4:any;
  images5:any;
  images6:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../../../../assets/images/9-building/biomedical/1.jpg',
        medium: '../../../../../../../../assets/images/9-building/biomedical/1.jpg',
        big: '../../../../../../../../assets/images/9-building/biomedical/1.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/biomedical/2.jpg',
        medium: '../../../../../../../../assets/images/9-building/biomedical/2.jpg',
        big: '../../../../../../../../assets/images/9-building/biomedical/2.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/biomedical/3.jpg',
        medium: '../../../../../../../../assets/images/9-building/biomedical/3.jpg',
        big: '../../../../../../../../assets/images/9-building/biomedical/3.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/biomedical/4.jpg',
        medium: '../../../../../../../../assets/images/9-building/biomedical/4.jpg',
        big: '../../../../../../../../assets/images/9-building/biomedical/4.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/biomedical/5.jpg',
        medium: '../../../../../../../../assets/images/9-building/biomedical/5.jpg',
        big: '../../../../../../../../assets/images/9-building/biomedical/5.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/biomedical/6.jpg',
        medium: '../../../../../../../../assets/images/9-building/biomedical/6.jpg',
        big: '../../../../../../../../assets/images/9-building/biomedical/6.jpg'
      },
    ];
    this.images2 = [
      {
        small: '../../../../../../../../assets/images/9-building/data-managment/1.jpg',
        medium: '../../../../../../../../assets/images/9-building/data-managment/1.jpg',
        big: '../../../../../../../../assets/images/9-building/data-managment/1.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/data-managment/2.jpg',
        medium: '../../../../../../../../assets/images/9-building/data-managment/2.jpg',
        big: '../../../../../../../../assets/images/9-building/data-managment/2.jpg'
      },
    ];
    this.images3 = [
      {
        small: '../../../../../../../../assets/images/9-building/electronic/1.jpg',
        medium: '../../../../../../../../assets/images/9-building/data-managment/1.jpg',
        big: '../../../../../../../../assets/images/9-building/data-managment/1.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/electronic/2.jpg',
        medium: '../../../../../../../../assets/images/9-building/data-managment/2.jpg',
        big: '../../../../../../../../assets/images/9-building/data-managment/2.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/electronic/3.jpg',
        medium: '../../../../../../../../assets/images/9-building/data-managment/3.jpg',
        big: '../../../../../../../../assets/images/9-building/data-managment/3.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/electronic/4.jpg',
        medium: '../../../../../../../../assets/images/9-building/data-managment/4.jpg',
        big: '../../../../../../../../assets/images/9-building/data-managment/4.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/electronic/5.jpg',
        medium: '../../../../../../../../assets/images/9-building/data-managment/5.jpg',
        big: '../../../../../../../../assets/images/9-building/data-managment/5.jpg'
      },
    ];
    this.images4 = [
      {
        small: '../../../../../../../../assets/images/9-building/microprocessor/1.jpg',
        medium: '../../../../../../../../assets/images/9-building/microprocessor/1.jpg',
        big: '../../../../../../../../assets/images/9-building/microprocessor/1.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/microprocessor/2.jpg',
        medium: '../../../../../../../../assets/images/9-building/microprocessor/2.jpg',
        big: '../../../../../../../../assets/images/9-building/microprocessor/2.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/microprocessor/3.jpg',
        medium: '../../../../../../../../assets/images/9-building/microprocessor/3.jpg',
        big: '../../../../../../../../assets/images/9-building/microprocessor/3.jpg'
      },
    ];
    this.images5 = [
      {
        small: '../../../../../../../../assets/images/9-building/data-collection/1.jpg',
        medium: '../../../../../../../../assets/images/9-building/data-collection/1.jpg',
        big: '../../../../../../../../assets/images/9-building/data-collection/1.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/data-collection/2.jpg',
        medium: '../../../../../../../../assets/images/9-building/data-collection/2.jpg',
        big: '../../../../../../../../assets/images/9-building/data-collection/2.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/data-collection/3.jpg',
        medium: '../../../../../../../../assets/images/9-building/data-collection/3.jpg',
        big: '../../../../../../../../assets/images/9-building/data-collection/3.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/data-collection/4.jpg',
        medium: '../../../../../../../../assets/images/9-building/data-collection/4.jpg',
        big: '../../../../../../../../assets/images/9-building/data-collection/4.jpg'
      }
    ];
    this.images6 = [
      {
        small: '../../../../../../../../assets/images/9-building/servers/1.jpg',
        medium: '../../../../../../../../assets/images/9-building/servers/1.jpg',
        big: '../../../../../../../../assets/images/9-building/servers/1.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/servers/2.jpg',
        medium: '../../../../../../../../assets/images/9-building/servers/2.jpg',
        big: '../../../../../../../../assets/images/9-building/servers/2.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/servers/3.jpg',
        medium: '../../../../../../../../assets/images/9-building/servers/3.jpg',
        big: '../../../../../../../../assets/images/9-building/servers/3.jpg'
      },
      {
        small: '../../../../../../../../assets/images/9-building/servers/4.jpg',
        medium: '../../../../../../../../assets/images/9-building/servers/4.jpg',
        big: '../../../../../../../../assets/images/9-building/servers/4.jpg'
      }
    ]
  }
}
