import { Component } from '@angular/core';

@Component({
  selector: 'app-second-floor',
  templateUrl: './second-floor.component.html',
  styleUrls: ['./second-floor.component.scss']
})
export class SecondFloorComponent {
images:any;
images2:any;
constructor(){
  this.images =  [
    {
      small: '../../../../../../../../assets/images/9-building/2.jpg',
      medium: '../../../../../../../../assets/images/9-building/2.jpg',
      big: '../../../../../../../../assets/images/9-building/2.jpg'
    },
    {
      small: '../../../../../../../../assets/images/9-building/2-1.jpg',
      medium: '../../../../../../../../assets/images/9-building/2-1.jpg',
      big: '../../../../../../../../assets/images/9-building/2-1.jpg'
    },
    {
      small: '../../../../../../../../assets/images/9-building/1-3.jpg',
      medium: '../../../../../../../../assets/images/9-building/1-3.jpg',
      big: '../../../../../../../../assets/images/9-building/1-3.jpg'
    },{
      small: '../../../../../../../../assets/images/9-building/2-3.jpg',
      medium: '../../../../../../../../assets/images/9-building/2-3.jpg',
      big: '../../../../../../../../assets/images/9-building/2-3.jpg'
    }
  ];
  this.images2 =  [
    {
      small: '../../../../../../../../assets/images/9-building/2-8.jpg',
      medium: '../../../../../../../../assets/images/9-building/2-8.jpg',
      big: '../../../../../../../../assets/images/9-building/2-8.jpg'
    },
    {
      small: '../../../../../../../../assets/images/9-building/2-9.jpg',
      medium: '../../../../../../../../assets/images/9-building/2-9.jpg',
      big: '../../../../../../../../assets/images/9-building/2-9.jpg'
    },
    {
      small: '../../../../../../../../assets/images/9-building/2-6.jpg',
      medium: '../../../../../../../../assets/images/9-building/2-6.jpg',
      big: '../../../../../../../../assets/images/9-building/2-6.jpg'
    },{
      small: '../../../../../../../../assets/images/9-building/2-7.jpg',
      medium: '../../../../../../../../assets/images/9-building/2-7.jpg',
      big: '../../../../../../../../assets/images/9-building/2-7.jpg'
    }
  ];
}
}
