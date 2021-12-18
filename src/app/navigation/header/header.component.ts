import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() drawerToggle = new EventEmitter<void>()
  isloggedIn:boolean = false;

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.authService.authChange.subscribe(isAuth => {
      this.isloggedIn = isAuth
    })
  }
  onToggleSidenav(){
    this.drawerToggle.emit()
  }

}
