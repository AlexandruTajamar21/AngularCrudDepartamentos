import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './Routing/app.routing';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceDepartamentos } from './Services/departamento.service';
import { InsertarComponent } from './components/insertar/insertar.component';
import { EditarComponent } from './components/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    InsertarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,routing
  ],
  providers: [appRoutingProviders,ServiceDepartamentos],
  bootstrap: [AppComponent]
})
export class AppModule { }
