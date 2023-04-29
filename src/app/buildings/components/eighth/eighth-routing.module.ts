import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EighthComponent } from "./eighth.component";

const routes: Routes = [
    {
        path: '',
        component: EighthComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class EighthRoutingModule {}