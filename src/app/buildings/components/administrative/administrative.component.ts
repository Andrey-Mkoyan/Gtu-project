import { Component } from '@angular/core';

@Component({
  selector: 'app-administrative',
  templateUrl: './administrative.component.html',
  styleUrls: ['./administrative.component.scss']
})
export class AdministrativeComponent {
  images: any;
  cards:any[] = [];
  constructor() {
    this.cards = [
      {
        title: 'ბიბლიოთეკა',
        path: '/administrative-building/library',
        image: '../../../../assets/images/administrative/cards/library.jpg',
        faculties: 'ბიბლიოთეკა- ბიბლიოთეკის ფონდში დიდი რაოდენობითაა ენციკლოპედიები, ლექსიკონები და სხვადასხვა სასწავლო-სამეცნიერო კვლევითი ორგანიზაციების სამეცნიერო შრომები.' ,
      },
      {
        title: 'გიორგი ნიკოლაძის სახელობის დარბაზი',
        path: '/administrative-building/hall',
        image: '../../../../assets/images/administrative/cards/hall.jpg',
        faculties: 'თბილისის ტექნიკურ უნივერსიტეტსგიორგი ნიკოლაძის  სახელობის საკონფერენციო დარბაზი შეემატა. ახალი სივრცე უმაღლეს სასწავლებელში პრეზიდენტმა გახსნა.',
      },
      {
        title: 'ნიკო ნიკოლაძის საკონფერენციო დარბაზი',
        path: '/administrative-building/conference-hall',
        image: '../../../../assets/images/administrative/cards/confernece.jpg',
        faculties: 'თბილისის ტექნიკურ უნივერსიტეტს ნიკო ნიკოლაძის სახელობის საკონფერენციო დარბაზი შეემატა. ახალი სივრცე უმაღლეს სასწავლებელში პრეზიდენტმა გახსნა.',
      },
    ]
    
    this.images = [
      {
        small: '../../../../assets/images/administrative/1.jpg',
        medium: '../../../../assets/images/administrative/1.jpg',
        big: '../../../../assets/images/administrative/1.jpg'
      },
      {
        small: '../../../../assets/images/administrative/2.jpg',
        medium: '../../../../assets/images/administrative/2.jpg',
        big: '../../../../assets/images/administrative/2.jpg'
      },
      {
        small: '../../../../assets/images/administrative/3.jpg',
        medium: '../../../../assets/images/administrative/3.jpg',
        big: '../../../../assets/images/administrative/3.jpg'
      },
      {
        small: '../../../../assets/images/administrative/4.jpg',
        medium: '../../../../assets/images/administrative/4.jpg',
        big: '../../../../assets/images/administrative/4.jpg'
      },
      {
        small: '../../../../assets/images/administrative/5.jpg',
        medium: '../../../../assets/images/administrative/5.jpg',
        big: '../../../../assets/images/administrative/5.jpg'
      },
      {
        small: '../../../../assets/images/administrative/6.jpg',
        medium: '../../../../assets/images/administrative/6.jpg',
        big: '../../../../assets/images/administrative/6.jpg'
      },
      {
        small: '../../../../assets/images/administrative/7.jpg',
        medium: '../../../../assets/images/administrative/7.jpg',
        big: '../../../../assets/images/administrative/7.jpg'
      },
      {
        small: '../../../../assets/images/administrative/8.jpg',
        medium: '../../../../assets/images/administrative/8.jpg',
        big: '../../../../assets/images/administrative/8.jpg'
      },
    ]
  }
}
