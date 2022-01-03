import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialsModule } from './materials.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { HomeComponent } from './dashboard/home/home.component';
import { CommishToolsComponent } from './commish-tools/commish-tools.component';
import { MyTeamComponent } from './dashboard/my-team/my-team.component';
import { ActionsComponent } from './dashboard/actions/actions.component';
import { LeagueComponent } from './dashboard/league/league.component';
import { PlayersComponent } from './commish-tools/players/players.component';
import { TeamManagerComponent } from './commish-tools/team-manager/team-manager.component';
import { TeamEditComponent } from './commish-tools/team-manager/team-edit/team-edit.component';
import { ContractEditComponent } from './commish-tools/team-manager/contract-edit/contract-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginComponent,
    SignUpComponent,
    SidenavComponent,
    HeaderComponent,
    HomeComponent,
    CommishToolsComponent,
    MyTeamComponent,
    ActionsComponent,
    LeagueComponent,
    PlayersComponent,
    TeamManagerComponent,
    TeamEditComponent,
    ContractEditComponent,
  ],
  imports: [
    MaterialsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
