import { Component } from '@angular/core';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent {
  cards:any = []
  cardId:number = 10
  background: string = '../../assets/backgrounds/main.webp';
  constructor() {
    this.cards = [
      {
        title: 'ადმინისტრაცუილი კორპუსი',
        path: 'administrative-building',
        image: '../../assets/backgrounds/main.webp',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის ადმინისტრაციული კორპუსი. მისამართი: მერაბ კოსტავას 77',
        id:1
      },
      {
        title: 'პირველი კორპუსი',
        path: '/first-building',
        image: '../../assets/backgrounds/first-building.webp',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის პირველი კორპუსი. მისამართი: მერაბ კოსტავას 68' ,
        id: 2,
      },
      {
        title: 'მეორე კორპუსი',
        path: 'second-building',
        image: '../../assets/backgrounds/2BuildingBackImage.webp',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მეორე კორპუსი. მისამართი: მერაბ კოსტავას 69',
        id:3
      },
      {
        title: 'მესამე კორპუსი',
        path: '/third-building',
        image: '../../assets/backgrounds/3BuildingBackImage.webp',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მესამე კორპუსი.მისამართი: მერაბ კოსტავას 77',
        id:4
      },
      {
        title: 'მეოთხე კორპუსი',
        path: '/fourth-building',
        image: '../../assets/backgrounds/4.webp' ,
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მეოთხე კორპუსი. მისამართი: მერაბ კოსტავას 77',
        id:5
      },
      {
        title: 'მეექვსე კორპუსი',
        path: '/sixth-building',
        image: '../../assets/backgrounds/six.webp' ,
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მეექვსე კორპუსი. მისამართი: მერაბ კოსტავას 77',
        id:6
      },
      {
        title: 'მეშვიდე კორპუსი',
        path: '/seveth-building',
        image: '../../assets/backgrounds/7-building.webp' ,
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მეშვიდე კორპუსი',
        id:7
      },
     
      {
        title: 'მერვე კორპუსი',
        path: '/eighth-building',
        image: '../../assets/backgrounds/8.webp',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მერვე კორპუსი. მისამართი: მერაბ კოსტავას 77',
        id:8
      },
      {
        title: 'მეცხრე კორპუსი',
        path: '/ninth-building',
        image: '../../assets/backgrounds/9.webp',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მეცხრე კორპუსი. მისამართი: მერაბ კოსტავას 77' ,
        id:9
      },
      {
        title: 'მეათე კორპუსი',
        path: '/tenth-building',
        image: '../../assets/backgrounds/10.webp',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მეათე კორპუსი. მისამართი: მერაბ კოსტავას 69' ,
        id:10
      },
      {
        title: 'მეთერთმეტე კორპუსი',
        path: '/eleventh-building',
        image: '../../assets/backgrounds/11.webp',
        faculties: 'საქართველოს ტექნიკური უნივერსიტეტის მეთერთმეტე კორპუსი. მისამართი. მისამართი: გურამიშვილის გამზ. 17' ,
        id:11
      },
      {
        title: 'გადამზადების კორპუსი',
        path: '/retrainings-building',
        image: '../../assets/backgrounds/gadamzadeba.webp',
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
