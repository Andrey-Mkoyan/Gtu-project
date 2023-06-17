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
        small: '../../../../../assets/images/retrainings/high/1.webp',
        medium: '../../../../../assets/images/retrainings/high/1.webp',
        big: '../../../../../assets/images/retrainings/high/1.webp'
      },
      {
        small: '../../../../../assets/images/retrainings/high/2.webp',
        medium: '../../../../../assets/images/retrainings/high/2.webp',
        big: '../../../../../assets/images/retrainings/high/2.webp'
      },
      {
        small: '../../../../../assets/images/retrainings/high/3.webp',
        medium: '../../../../../assets/images/retrainings/high/3.webp',
        big: '../../../../../assets/images/retrainings/high/3.webp'
      },
     
    ]
  }
}
