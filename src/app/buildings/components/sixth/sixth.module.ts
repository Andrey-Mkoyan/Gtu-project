import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SixthRoutingModule } from './sixth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SixthComponent } from './sixth.component';
import { InformationTechnologyComponent } from './information-technology/information-technology.component';
import { BusinessTechnologiesComponent } from './business-technologies/business-technologies.component';
import { EconomyComponent } from './economy/economy.component';
import { LowAndInternationalRelationsComponent } from './low-and-international-relations/low-and-international-relations.component';



@NgModule({
  declarations: [
    SixthComponent,
    InformationTechnologyComponent,
    BusinessTechnologiesComponent,
    EconomyComponent,
    LowAndInternationalRelationsComponent
  ],
  imports: [
    CommonModule,
    SixthRoutingModule,
    SharedModule
  ]
})
export class SixthModule { }
