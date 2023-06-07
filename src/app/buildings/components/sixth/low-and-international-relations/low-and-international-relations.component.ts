import { Component } from '@angular/core';

@Component({
  selector: 'app-low-and-international-relations',
  templateUrl: './low-and-international-relations.component.html',
  styleUrls: ['./low-and-international-relations.component.scss']
})
export class LowAndInternationalRelationsComponent {
  images:any;
  images2:any;
  images3:any;
  images4:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/6-building/9-floor/1.jpg',
        medium: '../../../../../assets/images/6-building/9-floor/1.jpg',
        big: '../../../../../assets/images/6-building/9-floor/1.jpg'
      },
      {
        small: '../../../../../assets/images/6-building/9-floor/2.jpg',
        medium: '../../../../../assets/images/6-building/9-floor/2.jpg',
        big: '../../../../../assets/images/6-building/9-floor/2.jpg'
      },
    ];
    this.images2 = [
      {
        small: '../../../../../assets/images/6-building/9-floor/low/1.jpg',
        medium: '../../../../../assets/images/6-building/9-floor/low/1.jpg',
        big: '../../../../../assets/images/6-building/9-floor/low/1.jpg'
      },
      {
        small: '../../../../../assets/images/6-building/9-floor/low/2.jpg',
        medium: '../../../../../assets/images/6-building/9-floor/low/2.jpg',
        big: '../../../../../assets/images/6-building/9-floor/low/2.jpg'
      },
    ];
    this.images3 = [
      {
        small: '../../../../../assets/images/6-building/9-floor/forensic-science/1.jpg',
        medium: '../../../../../assets/images/6-building/9-floor/forensic-science/1.jpg',
        big: '../../../../../assets/images/6-building/9-floor/forensic-science/1.jpg'
      },
    ];
    this.images4 = [
      {
        small: '../../../../../assets/images/6-building/9-floor/library/1.jpg',
        medium: '../../../../../assets/images/6-building/9-floor/library/1.jpg',
        big: '../../../../../assets/images/6-building/9-floor/library/1.jpg'
      },
      {
        small: '../../../../../assets/images/6-building/9-floor/library/2.jpg',
        medium: '../../../../../assets/images/6-building/9-floor/library/2.jpg',
        big: '../../../../../assets/images/6-building/9-floor/library/2.jpg'
      },
    
    ]
  }
}
