import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cards:any = [];
  @Output() id = new EventEmitter<number>()
  getFaculties() {
    
  }
  changeBackground(id:number) {
    this.id.emit(id)
    
  }
}
