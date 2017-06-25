import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PizzaComponent } from './pizza/pizza.component';

import { ProductService } from './product/index';
import { SidesComponent } from './sides/sides.component';
import { DrinksComponent } from './drinks/drinks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PizzaComponent,
    SidesComponent,
    DrinksComponent,
  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
