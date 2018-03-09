import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './portal/register/register.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortalComponent } from './portal/portal.component';
import { BabiesComponent } from './portal/babies/babies.component';
import { AuthGuardService } from './auth-guard.service';
import { AboutComponent } from './home/about/about.component';
import { FrontpageComponent } from './home/frontpage/frontpage.component';
import { UsersListComponent } from './portal/users-list/users-list.component';
import { UserDetailComponent } from './portal/user-detail/user-detail.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/front',
    pathMatch: 'full',

  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
        {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'front',
        component: FrontpageComponent
      }
    ]
  }, {
    path: 'portal',
    component: PortalComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'babies',
        component: BabiesComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'users-list',
        component: UsersListComponent
      },
      {
        path: 'user-detail/:id',
        component: UserDetailComponent
      },
    ]
  },
   {
    path: '**',
     component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
