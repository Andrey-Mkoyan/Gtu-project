import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EighthRoutingModule } from './eighth-routing.module';
import { EighthComponent } from './eighth.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FusionSolarComponent } from './fusion-solar/fusion-solar.component';
import { ElectricalCircuitsComponent } from './electrical-circuits/electrical-circuits.component';
import { ThermotechnicalComponent } from './thermotechnical/thermotechnical.component';
import { ConsumptionTechnologiesComponent } from './consumption-technologies/consumption-technologies.component';
import { HeatingLaboratoryComponent } from './heating-laboratory/heating-laboratory.component';
import { LibraryComponent } from './library/library.component';



@NgModule({
  declarations: [
    EighthComponent,
    FusionSolarComponent,
    ElectricalCircuitsComponent,
    ThermotechnicalComponent,
    ConsumptionTechnologiesComponent,
    HeatingLaboratoryComponent,
    LibraryComponent
  ],

  imports: [
    CommonModule,
    EighthRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class EighthModule { }
