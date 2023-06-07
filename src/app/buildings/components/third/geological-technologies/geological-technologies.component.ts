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
        small: '../../../../../assets/images/3-building/geological-technologies/1.jpg',
        medium: '../../../../../assets/images/3-building/geological-technologies/1.jpg',
        big: '../../../../../assets/images/3-building/geological-technologies/1.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/geological-technologies/2.jpg',
        medium: '../../../../../assets/images/3-building/geological-technologies/2.jpg',
        big: '../../../../../assets/images/3-building/geological-technologies/2.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/geological-technologies/3.jpg',
        medium: '../../../../../assets/images/3-building/geological-technologies/3.jpg',
        big: '../../../../../assets/images/3-building/geological-technologies/3.jpg'
      },
      {
        small: '../../../../../assets/images/3-building/geological-technologies/4.jpg',
        medium: '../../../../../assets/images/3-building/geological-technologies/4.jpg',
        big: '../../../../../assets/images/3-building/geological-technologies/4.jpg'
      },
    ]
  }
}
