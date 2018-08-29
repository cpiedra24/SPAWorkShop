import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componenstes user


//Component Artista
import { TaskComponent } from './task/task.component';

//Rutas donde se llevaran todos
//Vamos a difinir un array con la configuracion de cada una de la rutas de la app
const appRoutes: Routes = [
    { path: '', component: TaskComponent }

];

export const appRoutingProviders: any[] = []; //Exportamos como servicio 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);//