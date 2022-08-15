import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params 
      .subscribe(
        (params:Params) => {
          console.log(params)
        }
      )
  }
  onSubmit(form:NgForm){
    this.authService.registerNewUser({
      userName:form.value.userName,
      password:form.value.password,
      email:form.value.email
    })
  }
}
