import { Component } from '@angular/core';

@Component({
  selector: 'app-ninth',
  templateUrl: './ninth.component.html',
  styleUrls: ['./ninth.component.scss']
})
export class NinthComponent {
    floors:any;
    constructor() {
      this.floors = [
        {
          title: '0',
          path: 'ground-floor',
        },
        {
          title: '1',
          path: 'first-floor',
        },
        {
          title: '2',
          path: 'second-floor',
        },
        {
          title: '3',
          path: 'third-floor',
        },
        {
          title: '4',
          path: 'fourth-floor',
        }
      ]
    }
}
