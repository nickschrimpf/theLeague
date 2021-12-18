import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth:AngularFireAuth,
    private router:Router,
  ) { }

  registerNewUser(authData:AuthData){
    console.log(authData)
    this.auth.createUserWithEmailAndPassword(authData.email,authData.password).then( result => {
      console.log(result)
    })
  }
}
