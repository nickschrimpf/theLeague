import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-commish-tools',
  templateUrl: './commish-tools.component.html',
  styleUrls: ['./commish-tools.component.css']
})
export class CommishToolsComponent implements OnInit {

  


  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
  }

 

}
