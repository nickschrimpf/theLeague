import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { PlayersComponent } from './commish-tools/players/players.component';
import { TeamEditComponent } from './commish-tools/team-manager/team-edit/team-edit.component';
import { TeamManagerComponent } from './commish-tools/team-manager/team-manager.component';
import { HomeComponent } from './dashboard/home/home.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {path:'signup',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:WelcomePageComponent},
  {path:'dashboard',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'players',component:PlayersComponent,canActivate:[AuthGuard]},
  {path:'team-manager',component:TeamManagerComponent,canActivate:[AuthGuard],
    children:[
      {path:'new',component:TeamEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
