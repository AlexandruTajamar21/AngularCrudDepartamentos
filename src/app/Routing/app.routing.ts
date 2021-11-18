import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "../components/home/home.component";
import { InsertarComponent } from "../components/insertar/insertar.component";
import { EditarComponent } from "../components/editar/editar.component";
import { HomeempleadosComponent } from "../components/homeempleados/homeempleados.component";
import { EmpleadosDepartamentoComponent } from "../components/empleados-departamento/empleados-departamento.component";
import { IncrementarSalarioComponent } from "../components/incrementar-salario/incrementar-salario.component";

const appRoutes: Routes = [
    {path:"",component:HomeComponent},
    {path:"insertar",component:InsertarComponent}
    ,{path:"editar/:numero/:nombre/:localidad", component:EditarComponent}
    ,{path:"homeempleados",component:HomeempleadosComponent}
    ,{path:"empleados/:iddepartamento",component:EmpleadosDepartamentoComponent}
    ,{path:"incrementarsalario/:idempleado", component:IncrementarSalarioComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);