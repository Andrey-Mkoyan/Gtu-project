import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SeventhComponent } from "./seventh.component";

const routes: Routes = [
    {
        path: '',
        component: SeventhComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class SeventhRoutingModule {}