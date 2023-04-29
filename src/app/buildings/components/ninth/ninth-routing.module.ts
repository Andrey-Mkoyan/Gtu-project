import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NinthComponent } from "./ninth.component";

const routes: Routes = [
    {
        path: '',
        component: NinthComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class NinthRoutingModule {}