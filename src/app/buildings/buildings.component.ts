import { Component } from '@angular/core';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent {
  cards:any = {}
  constructor() {
    this.cards = [
      {
        title: 'First building',
        path: '/first-building',
        image: '../../assets/backgrounds/first-building.jpg',
        faculties: '1,2,3,4,5' 
      },
      {
        title: 'Second building',
        path: 'second-building',
        image: '../../assets/backgrounds/2BuildingBackImage.jpg',
        faculties: '1,2,3,4,5'  
      },
      {
        title: 'Third building',
        path: 'third-building',
        image: '../../assets/backgrounds/main.jpg',
        faculties: '1,2,3,4,5'  
      },
      {
        title: 'Fourth building',
        path: '/fourth-building',
        image: '../../assets/backgrounds/3BuildingBackImage.jpg',
        faculties: '1,2,3,4,5' 
      },
      {
        title: 'Sixth building',
        path: '/sixth-building',
        image: '../../assets/backgrounds/6-კორპუსი.jpg' ,
        faculties: '1,2,3,4,5' 
      },
      {
        title: 'Seventh building',
        path: '/seventh-building',
        image: '../../assets/backgrounds/7-კორპუსი.jpg' ,
        faculties: '1,2,3,4,5' 
      },
      {
        title: 'Eighth building',
        path: '/eighth-building',
        image: '../../assets/backgrounds/8-კორპუსი.jpg',
        faculties: '1,2,3,4,5'  
      },
      {
        title: 'Ninth building',
        path: '/ninth-building',
        image: '../../assets/backgrounds/9-კორპუსი.jpeg',
        faculties: '1,2,3,4,5' 
      },
      // {
      //   title: 'Tenth building',
      //   path: '',
      //   image: '' 
      // },
      // {
      //   title: 'Eleventh building',
      //   path: '',
      //   image: '' 
      // },
    ]
  }
}
