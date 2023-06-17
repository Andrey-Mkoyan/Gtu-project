import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      loadChildren: () => 
      import('./buildings/buildings.module').then((m) => m.BuildingsModule)
    },
]
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true,scrollPositionRestoration: "enabled"},)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}