import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { HomeComponent } from '../home-component.component';
import { PageNotFoundComponent } from '../page-not-found-component/page-not-found-component.component';
import { IndexComponent } from '../index/index.component';
import { ContactComponent } from '../contact/contact.component';
import { PricesComponent } from '../prices/prices.component';
import { RouteRoutingModule } from './route-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouteRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    HomeComponent,
    PageNotFoundComponent,
    IndexComponent,
    ContactComponent,
    PricesComponent
  ]
})
export class RouteModule { }
