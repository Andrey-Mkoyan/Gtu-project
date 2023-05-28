import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cards:any = [];

  getFaculties() {
    
  }
  changeBackground(id:number) {
    console.log(id);
    
  }
}
