import { Component } from '@angular/core';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent {
  cards:any = []
  cardId:number = 10
  background: string = '../../assets/backgrounds/main.jpg';
  constructor() {
    this.cards = [
      {
        title: 'პირველი კორპუსი',
        path: '/first-building',
        image: '../../assets/backgrounds/first-building.jpg',
        faculties: '1,2,3,4,5' ,
        id: 1,
      },
      {
        title: 'მეორე კორპუსი',
        path: 'second-building',
        image: '../../assets/backgrounds/2BuildingBackImage.jpg',
        faculties: '1,2,3,4,5',
        id:2
      },
      {
        title: 'ადმინისტრაცუილი კორპუსი',
        path: 'third-building',
        image: '../../assets/backgrounds/main.jpg',
        faculties: '1,2,3,4,5',
        id:3
      },

      {
        title: 'მესამე კორპუსი',
        path: '/fourth-building',
        image: '../../assets/backgrounds/3BuildingBackImage.jpg',
        faculties: '1,2,3,4,5',
        id:4
      },
      {
        title: 'მეოთხე კორპუსი',
        path: '/seventh-building',
        image: '../../assets/backgrounds/4კორპუსი.jpeg' ,
        faculties: '1,2,3,4,5',
        id:5
      },
      {
        title: 'მეექვსე კორპუსი',
        path: '/sixth-building',
        image: '../../assets/backgrounds/6-კორპუსი.jpg' ,
        faculties: '1,2,3,4,5',
        id:6
      },
     
      {
        title: 'მერვე კორპუსი',
        path: '/eighth-building',
        image: '../../assets/backgrounds/8-კორპუსი.jpg',
        faculties: '1,2,3,4,5',
        id:7
      },
      {
        title: 'მეცხრე',
        path: '/ninth-building',
        image: '../../assets/backgrounds/9-კორპუსი.jpeg',
        faculties: '1,2,3,4,5' ,
        id:8
      },
     
    ]
    
  }
  changeBackground(id:number) {
    this.cardId = id
    this.background = this.cards[id-1].image
    
  }
}
