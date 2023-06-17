import { Component } from '@angular/core';

@Component({
  selector: 'app-second-floor',
  templateUrl: './second-floor.component.html',
  styleUrls: ['./second-floor.component.scss']
})
export class SecondFloorComponent {
images:any;
images2:any;
images3:any;
constructor(){
  this.images =  [
    {
      small: '../../../../../../../../assets/images/9-building/2.webp',
      medium: '../../../../../../../../assets/images/9-building/2.webp',
      big: '../../../../../../../../assets/images/9-building/2.webp'
    },
    {
      small: '../../../../../../../../assets/images/9-building/2-1.webp',
      medium: '../../../../../../../../assets/images/9-building/2-1.webp',
      big: '../../../../../../../../assets/images/9-building/2-1.webp'
    },
    {
      small: '../../../../../../../../assets/images/9-building/1-3.webp',
      medium: '../../../../../../../../assets/images/9-building/1-3.webp',
      big: '../../../../../../../../assets/images/9-building/1-3.webp'
    },{
      small: '../../../../../../../../assets/images/9-building/2-3.webp',
      medium: '../../../../../../../../assets/images/9-building/2-3.webp',
      big: '../../../../../../../../assets/images/9-building/2-3.webp'
    }
  ];
  this.images2 =  [
    {
      small: '../../../../../../../../assets/images/9-building/2-8.webp',
      medium: '../../../../../../../../assets/images/9-building/2-8.webp',
      big: '../../../../../../../../assets/images/9-building/2-8.webp'
    },
    {
      small: '../../../../../../../../assets/images/9-building/2-9.webp',
      medium: '../../../../../../../../assets/images/9-building/2-9.webp',
      big: '../../../../../../../../assets/images/9-building/2-9.webp'
    },
    {
      small: '../../../../../../../../assets/images/9-building/2-6.webp',
      medium: '../../../../../../../../assets/images/9-building/2-6.webp',
      big: '../../../../../../../../assets/images/9-building/2-6.webp'
    },
    {
      small: '../../../../../../../../assets/images/9-building/2-7.webp',
      medium: '../../../../../../../../assets/images/9-building/2-7.webp',
      big: '../../../../../../../../assets/images/9-building/2-7.webp'
    }
  ];
  this.images3 = [
    {
      small: '../../../../../../../../assets/images/9-building/2-4.webp',
      medium: '../../../../../../../../assets/images/9-building/2-4.webp',
      big: '../../../../../../../../assets/images/9-building/2-4.webp'
    },
    {
      small: '../../../../../../../../assets/images/9-building/2-5.webp',
      medium: '../../../../../../../../assets/images/9-building/2-5.webp',
      big: '../../../../../../../../assets/images/9-building/2-5.webp'
    }
  ]
}
}
