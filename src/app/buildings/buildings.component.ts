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
        title: 'ადმინისტრაცუილი კორპუსი',
        path: 'administrative-building',
        image: '../../assets/backgrounds/main.jpg',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის ადმინისტრაციული კორპუსი.',
        id:1
      },
      {
        title: 'პირველი კორპუსი',
        path: '/first-building',
        image: '../../assets/backgrounds/first-building.jpg',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის პირველი კორპუსი' ,
        id: 2,
      },
      {
        title: 'მეორე კორპუსი',
        path: 'second-building',
        image: '../../assets/backgrounds/2BuildingBackImage.jpg',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მეორე კორპუსი',
        id:3
      },
      {
        title: 'მესამე კორპუსი',
        path: '/third-building',
        image: '../../assets/backgrounds/3BuildingBackImage.jpg',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მესამე კორპუსი',
        id:4
      },
      {
        title: 'მეოთხე კორპუსი',
        path: '/fourth-building',
        image: '../../assets/backgrounds/4.jpeg' ,
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მეითხე კორპუსი',
        id:5
      },
      {
        title: 'მეექვსე კორპუსი',
        path: '/sixth-building',
        image: '../../assets/backgrounds/six.jpg' ,
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მეექვსე კორპუსი',
        id:6
      },
      {
        title: 'მეშვიდე კორპუსი',
        path: '/seveth-building',
        image: '../../assets/backgrounds/7-building.jpeg' ,
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მეშვიდე კორპუსი',
        id:7
      },
     
      {
        title: 'მერვე კორპუსი',
        path: '/eighth-building',
        image: '../../assets/backgrounds/8.jpg',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მერვე კორპუსი',
        id:8
      },
      {
        title: 'მეცხრე კორპუსი',
        path: '/ninth-building',
        image: '../../assets/backgrounds/9.jpeg',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მეცხრე კორპუსი' ,
        id:9
      },
      {
        title: 'მეათე კორპუსი',
        path: '/tenth-building',
        image: '../../assets/backgrounds/10.jpg',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მეათე კორპუსი' ,
        id:10
      },
      {
        title: 'მეთერთმეტე კორპუსი',
        path: '/eleventh-building',
        image: '../../assets/backgrounds/11.jpg',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მეთერთმეტე კორპუსი' ,
        id:11
      },
      {
        title: 'გადამზადების კორპუსი',
        path: '/retrainings-building',
        image: '../../assets/backgrounds/gadamzadeba.jpg',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის გადამზადების კორპუსი' ,
        id:12
      },
     
    ]
    
  }
  changeBackground(id:number) {
    this.cardId = id
    this.background = this.cards[id-1].image
  }
}
