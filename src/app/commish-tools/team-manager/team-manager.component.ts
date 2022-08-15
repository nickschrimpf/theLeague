import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamManagerService } from '../team-manager.service';


@Component({
  selector: 'app-team-manager',
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.css']
})
export class TeamManagerComponent implements OnInit {
  teams ;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private teamService:TeamManagerService) { }

  ngOnInit(): void {
   
  }

 

  onNewContract(){
    this.router.navigate(['newContract'],{relativeTo:this.route})
  }
  
}
