import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NinthRoutingModule } from './ninth-routing.module';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NinthComponent } from './ninth.component';
import { FloorsComponent } from './components/floors/floors.component';



@NgModule({
  declarations: [
    HistoryPageComponent,
    NinthComponent,
    FloorsComponent
  ],
  imports: [
    CommonModule,
    NinthRoutingModule,
    SharedModule
  ],
  exports: [
    HistoryPageComponent
  ]
})
export class NinthModule { }
