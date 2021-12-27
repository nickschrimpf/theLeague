import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Player } from './players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playersChanged = new Subject<Player[]>()
  allCurrentPlayers:Player[] = []


  constructor(private db:AngularFirestore,) { }

  onfetchAllPlayers(){
    this.db.collection('players')
      .snapshotChanges()
      .pipe(map(playerArray => {
        return playerArray.map(player => {
          return {
            id:player.payload.doc.id,
            name:player.payload.doc.data()['name'],
            college:player.payload.doc.data()['college'],
            dob:player.payload.doc.data()['dob'],
            drafted:player.payload.doc.data()['drafted'],
            height:player.payload.doc.data()['height'],
            position:player.payload.doc.data()['position'],
            team:player.payload.doc.data()['team'],
            weight:player.payload.doc.data()['weight']
          }
        })
      })).subscribe((players:Player[]) => {
        this.allCurrentPlayers = players;
        this.playersChanged.next([...players])
      })
  }

}
