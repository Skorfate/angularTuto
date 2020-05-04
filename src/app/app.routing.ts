import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {EmpleadoComponent} from './empleado/empleado.component';
import {FrutasComponent} from './frutas/frutas.component';

const appRoutes: Routes = [
    {
        path: '' ,component : EmpleadoComponent   
    },
    {
        path: 'empleado', component: EmpleadoComponent
    },
    {
        path:'fruta', component: FrutasComponent
    },
    {
        path: '**', component : EmpleadoComponent
    }
];

export const appRoutingProviders: any [] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);