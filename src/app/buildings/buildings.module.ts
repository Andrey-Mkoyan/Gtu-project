import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingsComponent } from './buildings.component';
import { BuildingsRoutingModule } from './buildings-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BuildingsComponent,
  ],
  imports: [
    CommonModule,
    BuildingsRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    BuildingsComponent
  ]
})
export class BuildingsModule { }
