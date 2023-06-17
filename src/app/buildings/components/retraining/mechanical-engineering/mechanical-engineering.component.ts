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
        small: '../../../../../assets/images/retrainings/mechanical/1.webp',
        medium: '../../../../../assets/images/retrainings/mechanical/1.webp',
        big: '../../../../../assets/images/retrainings/mechanical/1.webp'
      },
      {
        small: '../../../../../assets/images/retrainings/mechanical/2.webp',
        medium: '../../../../../assets/images/retrainings/mechanical/2.webp',
        big: '../../../../../assets/images/retrainings/mechanical/2.webp'
      },
      {
        small: '../../../../../assets/images/retrainings/mechanical/3.webp',
        medium: '../../../../../assets/images/retrainings/mechanical/3.webp',
        big: '../../../../../assets/images/retrainings/mechanical/3.webp'
      },
      {
        small: '../../../../../assets/images/retrainings/mechanical/4.webp',
        medium: '../../../../../assets/images/retrainings/mechanical/4.webp',
        big: '../../../../../assets/images/retrainings/mechanical/4.webp'
      },
      {
        small: '../../../../../assets/images/retrainings/mechanical/5.webp',
        medium: '../../../../../assets/images/retrainings/mechanical/5.webp',
        big: '../../../../../assets/images/retrainings/mechanical/5.webp'
      },
    ]
  }
}
