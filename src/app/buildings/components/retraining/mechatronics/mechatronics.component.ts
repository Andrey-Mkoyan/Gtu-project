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
        small: '../../../../../assets/images/retrainings/mechatronics/3.jpg',
        medium: '../../../../../assets/images/retrainings/mechatronics/3.jpg',
        big: '../../../../../assets/images/retrainings/mechatronics/3.jpg'
      },
      {
        small: '../../../../../assets/images/retrainings/mechatronics/1.jpg',
        medium: '../../../../../assets/images/retrainings/mechatronics/1.jpg',
        big: '../../../../../assets/images/retrainings/mechatronics/1.jpg'
      },
      {
        small: '../../../../../assets/images/retrainings/mechatronics/2.jpg',
        medium: '../../../../../assets/images/retrainings/mechatronics/2.jpg',
        big: '../../../../../assets/images/retrainings/mechatronics/2.jpg'
      },
     
    ]
  }
}
