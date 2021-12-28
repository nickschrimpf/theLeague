import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { Subscription, throwError } from 'rxjs';
import { PlayerService } from '../player.service';
import { Player } from '../players';




@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit,AfterViewInit ,OnDestroy {
  dataSource = new MatTableDataSource<Player>();
  displayedColumns = ['team','name','position','college','dob','height','weight'];
  playerSubs:Subscription[] = []

@ViewChild(MatSort)sort:MatSort
@ViewChild(MatPaginator)paginator:MatPaginator


  constructor(private playerServ:PlayerService) { }

  ngOnInit(): void {
    this.playerServ.onfetchAllPlayers()
    this.playerSubs.push(this.playerServ.playersChanged.subscribe(data => this.dataSource.data = data))
  }
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }
  ngOnDestroy(): void {
      this.playerSubs.forEach(sub => sub.unsubscribe())
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
