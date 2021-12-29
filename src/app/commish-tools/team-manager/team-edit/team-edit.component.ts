import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {
  id:number;
  editMode = false;
  teamForm: FormGroup;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params:Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm()
        }
      )
  }

  private initForm(){
    let teamName = '';
    let ownerName = '';
    if (this.editMode){
      console.log('editMode')
    }
    this.teamForm = new FormGroup({
      teamName:new FormControl(teamName, Validators.required),
      ownerName:new FormControl(ownerName, Validators.required)
    })
  }
  
}
