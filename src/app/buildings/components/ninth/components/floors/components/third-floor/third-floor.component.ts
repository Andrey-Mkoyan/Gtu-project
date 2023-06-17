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
        small: '../../../../../../../../assets/images/9-building/biomedical/1.webp',
        medium: '../../../../../../../../assets/images/9-building/biomedical/1.webp',
        big: '../../../../../../../../assets/images/9-building/biomedical/1.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/biomedical/2.webp',
        medium: '../../../../../../../../assets/images/9-building/biomedical/2.webp',
        big: '../../../../../../../../assets/images/9-building/biomedical/2.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/biomedical/3.webp',
        medium: '../../../../../../../../assets/images/9-building/biomedical/3.webp',
        big: '../../../../../../../../assets/images/9-building/biomedical/3.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/biomedical/4.webp',
        medium: '../../../../../../../../assets/images/9-building/biomedical/4.webp',
        big: '../../../../../../../../assets/images/9-building/biomedical/4.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/biomedical/5.webp',
        medium: '../../../../../../../../assets/images/9-building/biomedical/5.webp',
        big: '../../../../../../../../assets/images/9-building/biomedical/5.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/biomedical/6.webp',
        medium: '../../../../../../../../assets/images/9-building/biomedical/6.webp',
        big: '../../../../../../../../assets/images/9-building/biomedical/6.webp'
      },
    ];
    this.images2 = [
      {
        small: '../../../../../../../../assets/images/9-building/data-managment/1.webp',
        medium: '../../../../../../../../assets/images/9-building/data-managment/1.webp',
        big: '../../../../../../../../assets/images/9-building/data-managment/1.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/data-managment/2.webp',
        medium: '../../../../../../../../assets/images/9-building/data-managment/2.webp',
        big: '../../../../../../../../assets/images/9-building/data-managment/2.webp'
      },
    ];
    this.images3 = [
      {
        small: '../../../../../../../../assets/images/9-building/electronic/1.webp',
        medium: '../../../../../../../../assets/images/9-building/data-managment/1.webp',
        big: '../../../../../../../../assets/images/9-building/data-managment/1.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/electronic/2.webp',
        medium: '../../../../../../../../assets/images/9-building/data-managment/2.webp',
        big: '../../../../../../../../assets/images/9-building/data-managment/2.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/electronic/3.webp',
        medium: '../../../../../../../../assets/images/9-building/data-managment/3.webp',
        big: '../../../../../../../../assets/images/9-building/data-managment/3.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/electronic/4.webp',
        medium: '../../../../../../../../assets/images/9-building/data-managment/4.webp',
        big: '../../../../../../../../assets/images/9-building/data-managment/4.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/electronic/5.webp',
        medium: '../../../../../../../../assets/images/9-building/data-managment/5.webp',
        big: '../../../../../../../../assets/images/9-building/data-managment/5.webp'
      },
    ];
    this.images4 = [
      {
        small: '../../../../../../../../assets/images/9-building/microprocessor/1.webp',
        medium: '../../../../../../../../assets/images/9-building/microprocessor/1.webp',
        big: '../../../../../../../../assets/images/9-building/microprocessor/1.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/microprocessor/2.webp',
        medium: '../../../../../../../../assets/images/9-building/microprocessor/2.webp',
        big: '../../../../../../../../assets/images/9-building/microprocessor/2.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/microprocessor/3.webp',
        medium: '../../../../../../../../assets/images/9-building/microprocessor/3.webp',
        big: '../../../../../../../../assets/images/9-building/microprocessor/3.webp'
      },
    ];
    this.images5 = [
      {
        small: '../../../../../../../../assets/images/9-building/data-collection/1.webp',
        medium: '../../../../../../../../assets/images/9-building/data-collection/1.webp',
        big: '../../../../../../../../assets/images/9-building/data-collection/1.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/data-collection/2.webp',
        medium: '../../../../../../../../assets/images/9-building/data-collection/2.webp',
        big: '../../../../../../../../assets/images/9-building/data-collection/2.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/data-collection/3.webp',
        medium: '../../../../../../../../assets/images/9-building/data-collection/3.webp',
        big: '../../../../../../../../assets/images/9-building/data-collection/3.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/data-collection/4.webp',
        medium: '../../../../../../../../assets/images/9-building/data-collection/4.webp',
        big: '../../../../../../../../assets/images/9-building/data-collection/4.webp'
      }
    ];
    this.images6 = [
      {
        small: '../../../../../../../../assets/images/9-building/servers/1.webp',
        medium: '../../../../../../../../assets/images/9-building/servers/1.webp',
        big: '../../../../../../../../assets/images/9-building/servers/1.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/servers/2.webp',
        medium: '../../../../../../../../assets/images/9-building/servers/2.webp',
        big: '../../../../../../../../assets/images/9-building/servers/2.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/servers/3.webp',
        medium: '../../../../../../../../assets/images/9-building/servers/3.webp',
        big: '../../../../../../../../assets/images/9-building/servers/3.webp'
      },
      {
        small: '../../../../../../../../assets/images/9-building/servers/4.webp',
        medium: '../../../../../../../../assets/images/9-building/servers/4.webp',
        big: '../../../../../../../../assets/images/9-building/servers/4.webp'
      }
    ]
  }
}
