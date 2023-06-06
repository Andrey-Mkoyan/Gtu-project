import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TenthComponent } from "./tenth.component";

const routes: Routes = [
    {
        path: '',
        component: TenthComponent,
    },
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class TenthRoutingModule {}