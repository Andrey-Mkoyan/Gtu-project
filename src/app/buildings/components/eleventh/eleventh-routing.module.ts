import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EleventhComponent } from "./eleventh.component";

const routes: Routes = [
    {
        path: '',
        component: EleventhComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class EleventhRoutingModule {}