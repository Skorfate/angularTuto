import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutasComponent } from './frutas/frutas.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorComponent } from './error/error.component';
import { RopaComponent} from './ropa/ropa.component';
import { CocheComponent} from './coche/coche.component';

const appRoutes: Routes = [
  { path: '',   component: EmpleadoComponent},
  { path: 'empleado',  component: EmpleadoComponent},
  { path: 'fruta',  component: FrutasComponent},
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'contacto/:page', component: ContactoComponent },
  { path: 'ropa', component: RopaComponent},
  { path: 'coche', component: CocheComponent},
  { path: '**', component: ErrorComponent },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
