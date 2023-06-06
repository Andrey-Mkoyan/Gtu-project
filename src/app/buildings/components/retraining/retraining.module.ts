import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetrainingComponent } from './retraining.component';
import { RetrainingRoutingModule } from './retraining-routing.module';
import { IndustrialAutomationComponent } from './industrial-automation/industrial-automation.component';
import { MechatronicsComponent } from './mechatronics/mechatronics.component';
import { MechanicalEngineeringComponent } from './mechanical-engineering/mechanical-engineering.component';
import { HighVoltageElectricianComponent } from './high-voltage-electrician/high-voltage-electrician.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    RetrainingComponent,
    IndustrialAutomationComponent,
    MechatronicsComponent,
    MechanicalEngineeringComponent,
    HighVoltageElectricianComponent,
    
  ],
  imports: [
    CommonModule,
    RetrainingRoutingModule,
    SharedModule
  ]
})
export class RetrainingModule { }
