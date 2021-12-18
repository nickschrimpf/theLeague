import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() drawerToggle = new EventEmitter<void>()
  isloggedIn:boolean = false;
  authSub = new Subscription

  constructor(
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    this.authSub = this.auth.authChange.subscribe(isAuth => {
      this.isloggedIn = isAuth
    })
  }
  ngOnDestroy(): void {
      this.authSub.unsubscribe()
  }
  onToggleSidenav(){
    this.drawerToggle.emit()
  }
  onLogOut(){
    this.auth.logUserOut()
  }


}
