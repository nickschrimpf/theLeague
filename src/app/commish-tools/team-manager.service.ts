import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TeamManagerService {

  constructor(private db:AngularFirestore, private router:Router, private route:ActivatedRoute) { }

  createNewTeam(){
  //  reach out to the db and create a new team
  }
  getAllTeams(){
    this.db.collection('teams').snapshotChanges()
    .pipe(map(teamArray => {
      return teamArray.map(team => {
        return {
          id:team.payload.doc.id,
          teamName:team.payload.doc.data()['name'],
          owner:team.payload.doc.data()['owner']
        }
      })
    })).subscribe((data) => {
      console.log(data)
    })
  }
  
}
