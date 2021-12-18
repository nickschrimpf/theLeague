import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {
@Output() drawerCloser = new EventEmitter<void>();
isLoggedIn:boolean = false;
authSub:Subscription

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.authSub = this.auth.authChange.subscribe(isAuth => {
      this.isLoggedIn = isAuth
    })
  }
  ngOnDestroy(): void {
      this.authSub.unsubscribe()
  }

  onClose(){
    this.drawerCloser.emit()
  }
  onLogOut(){
    this.auth.logUserOut()
  }
}
