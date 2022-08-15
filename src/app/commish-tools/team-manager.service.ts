import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TeamManagerService {
  allCurrentTeams = []
  allCurrentTeamsChanged = new Subject()
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
            teamName:team.payload.doc.data()['teamName'],
            owner:team.payload.doc.data()['owner']
          }
        })
      })).subscribe((data) => {
        this.allCurrentTeamsChanged.next(data)
        this.allCurrentTeams = data
      })
    }
    getTeamById(id:string){
     return this.allCurrentTeams.find(team => team.id === id)
    }
}
