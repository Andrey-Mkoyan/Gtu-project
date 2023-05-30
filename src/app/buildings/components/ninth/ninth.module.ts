import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NinthRoutingModule } from './ninth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NinthComponent } from './ninth.component';
import { FloorsComponent } from './components/floors/floors.component';
import { GroundFloorComponent } from './components/floors/components/ground-floor/ground-floor.component';
import { FirstFloorComponent } from './components/floors/components/first-floor/first-floor.component';
import { SecondFloorComponent } from './components/floors/components/second-floor/second-floor.component';
import { ThirdFloorComponent } from './components/floors/components/third-floor/third-floor.component';
import { FourthFloorComponent } from './components/floors/components/fourth-floor/fourth-floor.component';



@NgModule({
  declarations: [
    NinthComponent,
    FloorsComponent,
    GroundFloorComponent,
    FirstFloorComponent,
    SecondFloorComponent,
    ThirdFloorComponent,
    FourthFloorComponent
  ],
  imports: [
    CommonModule,
    NinthRoutingModule,
    SharedModule,
  ],
  exports: [
  ]
})
export class NinthModule { }
