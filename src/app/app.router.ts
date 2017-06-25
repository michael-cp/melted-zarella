import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { SidesComponent } from './sides/sides.component';
import { DrinksComponent } from './drinks/drinks.component';

export const router: Routes = [
    { path: '', redirectTo: 'pizza', pathMatch: 'full' },
    { path: 'pizza', component: PizzaComponent },
    { path: 'sides', component: SidesComponent },
    { path: 'drinks', component: DrinksComponent },
    { path: '**', redirectTo: '' }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
