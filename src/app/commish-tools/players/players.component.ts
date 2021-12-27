import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { Subscription } from 'rxjs';
import { PlayerService } from '../player.service';
import { Player } from '../players';




@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit ,OnDestroy {
  dataSource = new MatTableDataSource<Player>();
  displayedColumns = ['team','name','position','college','dob','height','weight'];
  playerSubs:Subscription[] = []




  constructor(private playerServ:PlayerService) { }

  ngOnInit(): void {
    this.playerServ.onfetchAllPlayers()
    this.playerSubs.push(this.playerServ.playersChanged.subscribe(data => this.dataSource.data = data))
  }
  ngOnDestroy(): void {
      this.playerSubs.forEach(sub => sub.unsubscribe())
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
