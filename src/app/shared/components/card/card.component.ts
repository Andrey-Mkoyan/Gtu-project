import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cards:any = [];
  @Input() width:number = 320;
  @Input() height:number = 220;
  @Output() id = new EventEmitter<number>()
 
  changeBackground(id:number) {
    this.id.emit(id)
    
  }
}
