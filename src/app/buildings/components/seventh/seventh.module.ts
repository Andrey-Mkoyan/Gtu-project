import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeventhRoutingModule } from './seventh-routing.nodule';
import { SeventhComponent } from './seventh.component';



@NgModule({
  declarations: [
    SeventhComponent
  ],
  imports: [
    CommonModule,
    SeventhRoutingModule
  ]
})
export class SeventhModule { }
