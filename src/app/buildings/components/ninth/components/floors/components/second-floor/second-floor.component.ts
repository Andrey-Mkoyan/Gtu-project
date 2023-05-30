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
      small: '../../../../../../../../assets/images/9-building/2-სართული.jpg',
      medium: '../../../../../../../../assets/images/9-building/2-სართული.jpg',
      big: '../../../../../../../../assets/images/9-building/2-სართული.jpg'
    },
    {
      small: '../../../../../../../../assets/images/9-building/2-სართული-1.jpg',
      medium: '../../../../../../../../assets/images/9-building/2-სართული-1.jpg',
      big: '../../../../../../../../assets/images/9-building/2-სართული-1.jpg'
    },
    {
      small: '../../../../../../../../assets/images/9-building/1-სართული3.jpg',
      medium: '../../../../../../../../assets/images/9-building/1-სართული3.jpg',
      big: '../../../../../../../../assets/images/9-building/1-სართული3.jpg'
    },{
      small: '../../../../../../../../assets/images/9-building/2-სართული-3.jpg',
      medium: '../../../../../../../../assets/images/9-building/2-სართული-3.jpg',
      big: '../../../../../../../../assets/images/9-building/2-სართული-3.jpg'
    }
  ];
  this.images2 =  [
    {
      small: '../../../../../../../../assets/images/9-building/2-სართული-8.jpg',
      medium: '../../../../../../../../assets/images/9-building/2-სართული-8.jpg',
      big: '../../../../../../../../assets/images/9-building/2-სართული-8.jpg'
    },
    {
      small: '../../../../../../../../assets/images/9-building/2-სართული-9.jpg',
      medium: '../../../../../../../../assets/images/9-building/2-სართული-9.jpg',
      big: '../../../../../../../../assets/images/9-building/2-სართული-9.jpg'
    },
    {
      small: '../../../../../../../../assets/images/9-building/2-სართული-6.jpg',
      medium: '../../../../../../../../assets/images/9-building/2-სართული-6.jpg',
      big: '../../../../../../../../assets/images/9-building/2-სართული-6.jpg'
    },{
      small: '../../../../../../../../assets/images/9-building/2-სართული-7.jpg',
      medium: '../../../../../../../../assets/images/9-building/2-სართული-7.jpg',
      big: '../../../../../../../../assets/images/9-building/2-სართული-7.jpg'
    }
  ];
}
}
