import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { FirstRoutingModule } from './first-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CuttingSewingComponent } from './cutting-sewing/cutting-sewing.component';
import { TransportComponent } from './transport/transport.component';
import { ExamsComponent } from './exams/exams.component';
import { SpaceComponent } from './space/space.component';



@NgModule({
  declarations: [
    FirstComponent,
    CuttingSewingComponent,
    TransportComponent,
    ExamsComponent,
    SpaceComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class FirstModule { }
