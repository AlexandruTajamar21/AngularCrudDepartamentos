import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "../components/home/home.component";
import { InsertarComponent } from "../components/insertar/insertar.component";
import { EditarComponent } from "../components/editar/editar.component";

const appRoutes: Routes = [
    {path:"",component:HomeComponent},
    {path:"insertar",component:InsertarComponent}
    ,{path:"editar/:numero/:nombre/:localidad", component:EditarComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);