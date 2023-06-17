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
        small: '../../../../../assets/images/retrainings/industrial/1.webp',
        medium: '../../../../../assets/images/retrainings/industrial/1.webp',
        big: '../../../../../assets/images/retrainings/industrial/1.webp'
      },
      {
        small: '../../../../../assets/images/retrainings/industrial/2.webp',
        medium: '../../../../../assets/images/retrainings/industrial/2.webp',
        big: '../../../../../assets/images/retrainings/industrial/2.webp'
      },
      {
        small: '../../../../../assets/images/retrainings/industrial/3.webp',
        medium: '../../../../../assets/images/retrainings/industrial/3.webp',
        big: '../../../../../assets/images/retrainings/industrial/3.webp'
      },
    ]
  }
}
