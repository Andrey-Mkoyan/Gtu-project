import { Component } from '@angular/core';

@Component({
  selector: 'app-mineral-substances',
  templateUrl: './mineral-substances.component.html',
  styleUrls: ['./mineral-substances.component.scss']
})
export class MineralSubstancesComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/3-building/Mineral-Substances/1.jpg',
        medium: '../../../../../assets/images/3-building/Mineral-Substances/1.jpg',
        big: '../../../../../assets/images/3-building/Mineral-Substances/1.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/Mineral-Substances/2.jpg',
        medium: '../../../../../assets/images/3-building/Mineral-Substances/2.jpg',
        big: '../../../../../assets/images/3-building/Mineral-Substances/2.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/Mineral-Substances/3.jpg',
        medium: '../../../../../assets/images/3-building/Mineral-Substances/3.jpg',
        big: '../../../../../assets/images/3-building/Mineral-Substances/3.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/Mineral-Substances/4.jpg',
        medium: '../../../../../assets/images/3-building/Mineral-Substances/4.jpg',
        big: '../../../../../assets/images/3-building/Mineral-Substances/4.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/Mineral-Substances/5.jpg',
        medium: '../../../../../assets/images/3-building/Mineral-Substances/5.jpg',
        big: '../../../../../assets/images/3-building/Mineral-Substances/5.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/Mineral-Substances/6.jpg',
        medium: '../../../../../assets/images/3-building/Mineral-Substances/6.jpg',
        big: '../../../../../assets/images/3-building/Mineral-Substances/6.jpg'
      },
    ]
  }
}
