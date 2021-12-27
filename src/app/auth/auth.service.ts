import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { PlayerService } from '../commish-tools/player.service';
import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn:boolean = false;
  authChange = new Subject<boolean>()
  constructor(
    private auth:AngularFireAuth,
    private router:Router,
    private playerServ:PlayerService
  ) { }

  registerNewUser(authData:AuthData){
    this.auth.createUserWithEmailAndPassword(authData.email,authData.password).then(result => {
      this.authChange.next(true);
      this.isLoggedIn = true
      this.router.navigate(['/dashboard'])
      console.log(result)
    }).catch(error => {
      console.log(error)
    });
  }

  logUserIn(authData:AuthData){
    this.auth.signInWithEmailAndPassword(authData.email,authData.password).then(result => {
      this.authChange.next(true);
      this.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
    }).catch(error => {
      console.log(error)
    })
    
  }

  logUserOut(){
    this.auth.signOut();
    this.isLoggedIn = false;
    this.authChange.next(false);
    this.router.navigate([''])
    this.playerServ.cancelSubs()
  }
  initAuthListener(){
    this.auth.authState.subscribe(user => {
      if(user){
        this.isLoggedIn = true;
        this.authChange.next(true);
        this.router.navigate(['/dashboard']);
      }else{
        this.isLoggedIn = false;
        this.authChange.next(false);
        this.router.navigate(['']);
      }
    })
  }

  isAuth(){
    return this.isLoggedIn
  }
}
