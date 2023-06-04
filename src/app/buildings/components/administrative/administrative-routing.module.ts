import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdministrativeComponent } from "./administrative.component";
import { LibraryComponent } from "./components/library/library.component";
import { ConferenceHallComponent } from "./components/conference-hall/conference-hall.component";
import { HallComponent } from "./components/hall/hall.component";

const routes: Routes = [
    {
        path: '',
        component: AdministrativeComponent,
    },
    {
        path: 'library',
        component: LibraryComponent,
    },
    {
        path: 'conference-hall',
        component: ConferenceHallComponent,
    },
    {
        path: 'hall',
        component: HallComponent,
    },

    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AdministrativeRoutingModule {}