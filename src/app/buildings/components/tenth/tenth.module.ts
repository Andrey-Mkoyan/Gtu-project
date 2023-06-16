import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenthComponent } from './tenth.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TenthRoutingModule } from './tenth-routing.module';



@NgModule({
  declarations: [
    TenthComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TenthRoutingModule
  ],
  exports: [
    TenthComponent
  ]
})
export class TenthModule { }
