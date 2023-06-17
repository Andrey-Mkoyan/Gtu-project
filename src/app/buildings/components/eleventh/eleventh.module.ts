import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EleventhComponent } from './eleventh.component';
import { EleventhRoutingModule } from './eleventh-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    EleventhComponent
  ],
  imports: [
    CommonModule,
    EleventhRoutingModule,
    SharedModule
  ]
})
export class EleventhModule { }
