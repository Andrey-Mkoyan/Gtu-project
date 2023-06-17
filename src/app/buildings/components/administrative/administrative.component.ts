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
        image: '../../../../assets/images/administrative/cards/library.webp',
        faculties: 'ბიბლიოთეკა- ბიბლიოთეკის ფონდში დიდი რაოდენობითაა ენციკლოპედიები, ლექსიკონები და სხვადასხვა სასწავლო-სამეცნიერო კვლევითი ორგანიზაციების სამეცნიერო შრომები.' ,
      },
      {
        title: 'გიორგი ნიკოლაძის სახელობის დარბაზი',
        path: '/administrative-building/hall',
        image: '../../../../assets/images/administrative/cards/hall.webp',
        faculties: 'თბილისის ტექნიკურ უნივერსიტეტსგიორგი ნიკოლაძის  სახელობის საკონფერენციო დარბაზი შეემატა. ახალი სივრცე უმაღლეს სასწავლებელში პრეზიდენტმა გახსნა.',
      },
      {
        title: 'ნიკო ნიკოლაძის საკონფერენციო დარბაზი',
        path: '/administrative-building/conference-hall',
        image: '../../../../assets/images/administrative/cards/confernece.webp',
        faculties: 'თბილისის ტექნიკურ უნივერსიტეტს ნიკო ნიკოლაძის სახელობის საკონფერენციო დარბაზი შეემატა. ახალი სივრცე უმაღლეს სასწავლებელში პრეზიდენტმა გახსნა.',
      },
    ]
    
    this.images = [
      {
        small: '../../../../assets/images/administrative/1.webp',
        medium: '../../../../assets/images/administrative/1.webp',
        big: '../../../../assets/images/administrative/1.webp'
      },
      {
        small: '../../../../assets/images/administrative/2.webp',
        medium: '../../../../assets/images/administrative/2.webp',
        big: '../../../../assets/images/administrative/2.webp'
      },
      {
        small: '../../../../assets/images/administrative/3.webp',
        medium: '../../../../assets/images/administrative/3.webp',
        big: '../../../../assets/images/administrative/3.webp'
      },
      {
        small: '../../../../assets/images/administrative/4.webp',
        medium: '../../../../assets/images/administrative/4.webp',
        big: '../../../../assets/images/administrative/4.webp'
      },
      {
        small: '../../../../assets/images/administrative/5.webp',
        medium: '../../../../assets/images/administrative/5.webp',
        big: '../../../../assets/images/administrative/5.webp'
      },
      {
        small: '../../../../assets/images/administrative/6.webp',
        medium: '../../../../assets/images/administrative/6.webp',
        big: '../../../../assets/images/administrative/6.webp'
      },
      {
        small: '../../../../assets/images/administrative/7.webp',
        medium: '../../../../assets/images/administrative/7.webp',
        big: '../../../../assets/images/administrative/7.webp'
      },
      {
        small: '../../../../assets/images/administrative/8.webp',
        medium: '../../../../assets/images/administrative/8.webp',
        big: '../../../../assets/images/administrative/8.webp'
      },
    ]
  }
}
