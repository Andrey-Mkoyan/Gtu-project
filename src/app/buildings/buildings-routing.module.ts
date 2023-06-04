import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BuildingsComponent } from "./buildings.component";
import { FirstComponent } from "./components/first/first.component";
import { SecondComponent } from "./components/second/second.component";
import { ThirdComponent } from "./components/third/third.component";
import { FourthComponent } from "./components/fourth/fourth.component";
import { EighthComponent } from "./components/eighth/eighth.component";
import { SeventhComponent } from "./components/seventh/seventh.component";
import { SixthComponent } from "./components/sixth/sixth.component";
const routes: Routes = [
    {
        path: '',
        component: BuildingsComponent,
    },
    {
        path: 'first-building',
        loadChildren: () => 
        import('./components/first/first.module').then((m) => m.FirstModule)
    },
    {
        path: 'second-building',
        loadChildren: () => 
        import('./components/second/second.module').then((m) => m.SecondModule)
    },
    {
        path: 'third-building',
        loadChildren: () => 
        import('./components/third/third.module').then((m) => m.ThirdModule)
    },
    {
        path: 'administrative-building',
        loadChildren: () => 
        import('./components/administrative/administrative.module').then((m) => m.AdministrativeModule)
    },
    {
        path: 'fourth-building',
        loadChildren: () => 
        import('./components/fourth/fourth.module').then((m) => m.FourthModule)
    },
    {
        path: 'sixth-building',
        loadChildren: () => 
        import('./components/sixth/sixth.module').then((m) => m.SixthModule)
    },
    {
        path: 'seventh-building',
        loadChildren: () => 
        import('./components/seventh/seventh.module').then((m) => m.SeventhModule)
    },
    {
        path: 'eighth-building',
        loadChildren: () =>
        import('./components/eighth/eighth.module').then((m) => m.EighthModule)
    },
    {
        path: 'ninth-building',
        loadChildren: () =>
            import('./components/ninth/ninth.module').then((m) => m.NinthModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BuildingsRoutingModule { }