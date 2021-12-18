import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
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
  initAuthListener(){
    this.auth.authState.subscribe(user => {
      if(user){
        this.isLoggedIn = true;
        this.authChange.next(true);
        this.router.navigate(['/dashboard']);
      }else{
        this.isLoggedIn = false;
        this.authChange.next(false);
        this.router.navigate(['/login']);
      }
    })
  }

  isAuth(){
    return this.isLoggedIn
  }
}
