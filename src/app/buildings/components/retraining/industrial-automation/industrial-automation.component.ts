import { Component } from '@angular/core';

@Component({
  selector: 'app-industrial-automation',
  templateUrl: './industrial-automation.component.html',
  styleUrls: ['./industrial-automation.component.scss']
})
export class IndustrialAutomationComponent {
  images:any;
  constructor() {
    this.images = [
      {
        small: '../../../../../assets/images/retrainings/industrial/1.jpg',
        medium: '../../../../../assets/images/retrainings/industrial/1.jpg',
        big: '../../../../../assets/images/retrainings/industrial/1.jpg'
      },
      {
        small: '../../../../../assets/images/retrainings/industrial/2.jpg',
        medium: '../../../../../assets/images/retrainings/industrial/2.jpg',
        big: '../../../../../assets/images/retrainings/industrial/2.jpg'
      },
      {
        small: '../../../../../assets/images/retrainings/industrial/3.jpg',
        medium: '../../../../../assets/images/retrainings/industrial/3.jpg',
        big: '../../../../../assets/images/retrainings/industrial/3.jpg'
      },
    ]
  }
}
