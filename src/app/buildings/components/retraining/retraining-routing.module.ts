import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RetrainingComponent } from "./retraining.component";

const routes: Routes = [
    {
        path: '',
        component: RetrainingComponent,
    },
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class RetrainingRoutingModule {}