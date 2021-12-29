import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeamManagerService {

  constructor(private db:AngularFirestore, private router:Router, private route:ActivatedRoute) { }

  createNewTeam(){
   
  }
}
