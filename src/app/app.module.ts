import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { PortalComponent } from './portal/portal.component';
import { BabiesComponent } from './portal/babies/babies.component';
import { SittersComponent } from './portal/sitters/sitters.component';
import { HomeComponent } from './home-component/home-component.component';
import { RouteModule } from './home-component/route/route.module';


@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    BabiesComponent,
    SittersComponent,
    HomeComponent,
    RouteModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
