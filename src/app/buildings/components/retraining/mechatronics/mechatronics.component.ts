import { Component } from '@angular/core';

@Component({
  selector: 'app-mechatronics',
  templateUrl: './mechatronics.component.html',
  styleUrls: ['./mechatronics.component.scss']
})
export class MechatronicsComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/retrainings/mechatronics/3.webp',
        medium: '../../../../../assets/images/retrainings/mechatronics/3.webp',
        big: '../../../../../assets/images/retrainings/mechatronics/3.webp'
      },
      {
        small: '../../../../../assets/images/retrainings/mechatronics/1.webp',
        medium: '../../../../../assets/images/retrainings/mechatronics/1.webp',
        big: '../../../../../assets/images/retrainings/mechatronics/1.webp'
      },
      {
        small: '../../../../../assets/images/retrainings/mechatronics/2.webp',
        medium: '../../../../../assets/images/retrainings/mechatronics/2.webp',
        big: '../../../../../assets/images/retrainings/mechatronics/2.webp'
      },
     
    ]
  }
}
