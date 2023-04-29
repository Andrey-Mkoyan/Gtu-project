import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  show1:boolean = false
  show2:boolean = false
  show3:boolean = false
  show4:boolean = false
  ngOnInit() {
    setTimeout(()=> {
      this.show1 = true
    },2500)
    setTimeout(() => {
      this.show2 = true
    },3000)
    setTimeout(() => {
      this.show3 = true
    },3500)
    setTimeout(() => {
      this.show4 = true
    },4000)
  }
}
