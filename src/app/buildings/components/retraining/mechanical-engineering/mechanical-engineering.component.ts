import { Component } from '@angular/core';

@Component({
  selector: 'app-mechanical-engineering',
  templateUrl: './mechanical-engineering.component.html',
  styleUrls: ['./mechanical-engineering.component.scss']
})
export class MechanicalEngineeringComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/retrainings/mechanical/1.jpg',
        medium: '../../../../../assets/images/retrainings/mechanical/1.jpg',
        big: '../../../../../assets/images/retrainings/mechanical/1.jpg'
      },
      {
        small: '../../../../../assets/images/retrainings/mechanical/2.jpg',
        medium: '../../../../../assets/images/retrainings/mechanical/2.jpg',
        big: '../../../../../assets/images/retrainings/mechanical/2.jpg'
      },
      {
        small: '../../../../../assets/images/retrainings/mechanical/3.jpg',
        medium: '../../../../../assets/images/retrainings/mechanical/3.jpg',
        big: '../../../../../assets/images/retrainings/mechanical/3.jpg'
      },
      {
        small: '../../../../../assets/images/retrainings/mechanical/4.jpg',
        medium: '../../../../../assets/images/retrainings/mechanical/4.jpg',
        big: '../../../../../assets/images/retrainings/mechanical/4.jpg'
      },
      {
        small: '../../../../../assets/images/retrainings/mechanical/5.jpg',
        medium: '../../../../../assets/images/retrainings/mechanical/5.jpg',
        big: '../../../../../assets/images/retrainings/mechanical/5.jpg'
      },
    ]
  }
}
