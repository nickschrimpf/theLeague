import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TeamManagerService } from '../../team-manager.service';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {
  id:string;
  team
  editMode = false;
  teamForm: FormGroup;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private teamService:TeamManagerService
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params:Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm()
        }
      )
  }
// initiate the form
// if we are in edit mode console log edit mode
// we need to handle new invites 
  private initForm(){
    let teamName = '';
    let ownerName = '';

    if (this.editMode){
      this.team = this.teamService.getTeamById(this.id)
      teamName = this.team.teamName
      ownerName = this.team.owner
    }
    this.teamForm = new FormGroup({
      teamName:new FormControl(teamName, Validators.required),
      ownerName:new FormControl(ownerName, Validators.required)
    })
  }
  onContractAdd(){
    this.router.navigate(['contracts'],{relativeTo: this.route})
  }
}
