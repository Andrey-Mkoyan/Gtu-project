import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NinthComponent } from "./ninth.component";
import { GroundFloorComponent } from "./components/floors/components/ground-floor/ground-floor.component";
import { FirstFloorComponent } from "./components/floors/components/first-floor/first-floor.component";
import { SecondFloorComponent } from "./components/floors/components/second-floor/second-floor.component";
import { FourthFloorComponent } from "./components/floors/components/fourth-floor/fourth-floor.component";
import { ThirdFloorComponent } from "./components/floors/components/third-floor/third-floor.component";

const routes: Routes = [
    {
        path: '',
        component: NinthComponent,
    },
    {
       path: 'ground-floor',
       component: GroundFloorComponent,
    },
    {
       path: 'first-floor',
       component: FirstFloorComponent,
    },
    {
        path: 'second-floor',
        component: SecondFloorComponent
    },
    {
        path: 'third-floor',
        component: ThirdFloorComponent
    },
    {
        path: 'fourth-floor',
        component: FourthFloorComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class NinthRoutingModule {}