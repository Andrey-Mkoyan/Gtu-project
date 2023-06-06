import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourthRoutingModule } from './fourth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FourthComponent } from './fourth.component';



@NgModule({
  declarations: [
    FourthComponent
  ],
  imports: [
    CommonModule,
    FourthRoutingModule,
    SharedModule
  ]
})
export class FourthModule { }
