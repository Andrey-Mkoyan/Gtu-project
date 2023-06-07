import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdRoutingModule } from './third-routing.module';
import { ThirdComponent } from './third.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EducationDevicesComponent } from './education-devices/education-devices.component';
import { GeologicalTechnologiesComponent } from './geological-technologies/geological-technologies.component';
import { ShaftLaboratoryComponent } from './shaft-laboratory/shaft-laboratory.component';
import { GeologyComponent } from './geology/geology.component';
import { MineralSubstancesComponent } from './mineral-substances/mineral-substances.component';
import { MineralogyAndPetrographyComponent } from './mineralogy-and-petrography/mineralogy-and-petrography.component';



@NgModule({
  declarations: [
    ThirdComponent,
    EducationDevicesComponent,
    GeologicalTechnologiesComponent,
    ShaftLaboratoryComponent,
    GeologyComponent,
    MineralSubstancesComponent,
    MineralogyAndPetrographyComponent
  ],
  imports: [
    CommonModule,
    ThirdRoutingModule,
    SharedModule
  ]
})
export class ThirdModule { }
