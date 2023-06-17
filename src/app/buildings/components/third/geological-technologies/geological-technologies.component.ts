import { Component } from '@angular/core';

@Component({
  selector: 'app-geological-technologies',
  templateUrl: './geological-technologies.component.html',
  styleUrls: ['./geological-technologies.component.scss']
})
export class GeologicalTechnologiesComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/3-building/geological-technologies/1.webp',
        medium: '../../../../../assets/images/3-building/geological-technologies/1.webp',
        big: '../../../../../assets/images/3-building/geological-technologies/1.webp'
      },
      {
        small: '../../../../../assets/images/3-building/geological-technologies/2.webp',
        medium: '../../../../../assets/images/3-building/geological-technologies/2.webp',
        big: '../../../../../assets/images/3-building/geological-technologies/2.webp'
      },
      {
        small: '../../../../../assets/images/3-building/geological-technologies/3.webp',
        medium: '../../../../../assets/images/3-building/geological-technologies/3.webp',
        big: '../../../../../assets/images/3-building/geological-technologies/3.webp'
      },
      {
        small: '../../../../../assets/images/3-building/geological-technologies/4.webp',
        medium: '../../../../../assets/images/3-building/geological-technologies/4.webp',
        big: '../../../../../assets/images/3-building/geological-technologies/4.webp'
      },
    ]
  }
}
