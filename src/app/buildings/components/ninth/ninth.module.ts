import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NinthRoutingModule } from './ninth-routing.module';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NinthComponent } from './ninth.component';
import { FloorsComponent } from './components/floors/floors.component';
import { GroundFloorComponent } from './components/floors/components/ground-floor/ground-floor.component';
import { FirstFloorComponent } from './components/floors/components/first-floor/first-floor.component';



@NgModule({
  declarations: [
    HistoryPageComponent,
    NinthComponent,
    FloorsComponent,
    GroundFloorComponent,
    FirstFloorComponent
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
