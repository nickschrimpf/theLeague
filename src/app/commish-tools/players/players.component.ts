import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { PlayerService } from '../player.service';
import { Player } from '../players';




@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  dataSource = new MatTableDataSource<Player>()
  displayedColumns = ['name','position','team','college','dob','height','weight']
  




  constructor(private playerServ:PlayerService) { }

  ngOnInit(): void {
    this.playerServ.onfetchAllPlayers()
    this.playerServ.playersChanged.subscribe(data => this.dataSource.data = data)
  }

  

}
