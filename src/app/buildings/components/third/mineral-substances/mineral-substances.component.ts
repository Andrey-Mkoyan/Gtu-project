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
        small: '../../../../../assets/images/3-building/Mineral-Substances/1.webp',
        medium: '../../../../../assets/images/3-building/Mineral-Substances/1.webp',
        big: '../../../../../assets/images/3-building/Mineral-Substances/1.webp'
      },
      {
        small: '../../../../../assets/images/3-building/Mineral-Substances/2.webp',
        medium: '../../../../../assets/images/3-building/Mineral-Substances/2.webp',
        big: '../../../../../assets/images/3-building/Mineral-Substances/2.webp'
      },
      {
        small: '../../../../../assets/images/3-building/Mineral-Substances/3.webp',
        medium: '../../../../../assets/images/3-building/Mineral-Substances/3.webp',
        big: '../../../../../assets/images/3-building/Mineral-Substances/3.webp'
      },
      {
        small: '../../../../../assets/images/3-building/Mineral-Substances/4.webp',
        medium: '../../../../../assets/images/3-building/Mineral-Substances/4.webp',
        big: '../../../../../assets/images/3-building/Mineral-Substances/4.webp'
      },
      {
        small: '../../../../../assets/images/3-building/Mineral-Substances/5.webp',
        medium: '../../../../../assets/images/3-building/Mineral-Substances/5.webp',
        big: '../../../../../assets/images/3-building/Mineral-Substances/5.webp'
      },
      {
        small: '../../../../../assets/images/3-building/Mineral-Substances/6.webp',
        medium: '../../../../../assets/images/3-building/Mineral-Substances/6.webp',
        big: '../../../../../assets/images/3-building/Mineral-Substances/6.webp'
      },
    ]
  }
}
