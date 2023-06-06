import { Component } from '@angular/core';

@Component({
  selector: 'app-high-voltage-electrician',
  templateUrl: './high-voltage-electrician.component.html',
  styleUrls: ['./high-voltage-electrician.component.scss']
})
export class HighVoltageElectricianComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/retrainings/high/1.jpg',
        medium: '../../../../../assets/images/retrainings/high/1.jpg',
        big: '../../../../../assets/images/retrainings/high/1.jpg'
      },
      {
        small: '../../../../../assets/images/retrainings/high/2.jpg',
        medium: '../../../../../assets/images/retrainings/high/2.jpg',
        big: '../../../../../assets/images/retrainings/high/2.jpg'
      },
      {
        small: '../../../../../assets/images/retrainings/high/3.jpg',
        medium: '../../../../../assets/images/retrainings/high/3.jpg',
        big: '../../../../../assets/images/retrainings/high/3.jpg'
      },
     
    ]
  }
}
