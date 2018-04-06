import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './portal/register/register.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortalComponent } from './portal/portal.component';
import { BabiesComponent } from './portal/babies/babies.component';
import { SittersComponent } from './portal/sitters/sitters.component';
import { PortalNavComponent } from './portal/portal-nav/portal-nav.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { AboutComponent } from './home/about/about.component';
import { FrontpageComponent } from './home/frontpage/frontpage.component';
import { DataService } from './data.service';
import { UsersListComponent } from './portal/users-list/users-list.component';
import { UserDetailComponent } from './portal/user-detail/user-detail.component';
import { UsersActions } from './users.actions';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { rootReducer, IAppState } from './store/store';
import { RatingComponent } from './portal/rating/rating.component'; // Added this to get the root reducer


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    HomeComponent,
    PageNotFoundComponent,
    PortalComponent,
    BabiesComponent,
    SittersComponent,
    PortalNavComponent,
    AboutComponent,
    FrontpageComponent,
    UsersListComponent,
    UserDetailComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgReduxModule, NgReduxRouterModule.forRoot()

  ],
  providers: [AuthGuardService, AuthService, DataService, UsersActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter, ) {

    this.ngRedux.configureStore(rootReducer, {});

    ngReduxRouter.initialize(/* args */);
  }
}
