import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second.component';
import { SecondRoutingModule } from './second-routing.module';
import { PublicTheaterComponent } from './public-theater/public-theater.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuditoriumComponent } from './auditorium/auditorium.component';
import { SanDiegoComponent } from './san-diego/san-diego.component';
import { AuditorriumTwoComponent } from './auditorrium-two/auditorrium-two.component';



@NgModule({
  declarations: [
    SecondComponent,
    PublicTheaterComponent,
    AuditoriumComponent,
    SanDiegoComponent,
    AuditorriumTwoComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule,
    SharedModule
  ],
  exports: [
    SecondComponent
  ]
})
export class SecondModule { }
