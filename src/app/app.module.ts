import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FrutasComponent } from './frutas/frutas.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { routing, appRoutingProviders } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorComponent } from './error/error.component';
import { RopaComponent } from './ropa/ropa.component';
import { ConversorPipe } from './pipe/conversor.pipe';
import { CocheComponent } from './coche/coche.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FrutasComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ErrorComponent,
    RopaComponent,
    ConversorPipe,
    CocheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
