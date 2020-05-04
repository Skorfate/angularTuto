import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FrutasComponent } from './frutas/frutas.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import {routing, appRoutingProviders} from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    FrutasComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
