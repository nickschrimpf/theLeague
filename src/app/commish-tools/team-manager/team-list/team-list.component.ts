import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamManagerService } from '../../team-manager.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams

  constructor(
    private teamService:TeamManagerService, 
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.teamService.getAllTeams()
    this.teamService.allCurrentTeamsChanged.subscribe(teams => {
      this.teams = teams;
    })
  }
  onCreateNewTeam(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

}
