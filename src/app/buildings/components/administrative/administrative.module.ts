import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrativeComponent } from './administrative.component';
import { AdministrativeRoutingModule } from './administrative-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LibraryComponent } from './components/library/library.component';
import { HallComponent } from './components/hall/hall.component';
import { ConferenceHallComponent } from './components/conference-hall/conference-hall.component';


@NgModule({
  declarations: [
    AdministrativeComponent,
    LibraryComponent,
    HallComponent,
    ConferenceHallComponent
  ],
  imports: [
    CommonModule,
    AdministrativeRoutingModule,
    SharedModule,
  ],
  
})
export class AdministrativeModule { }
