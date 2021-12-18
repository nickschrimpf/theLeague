import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
@Output() drawerCloser = new EventEmitter<void>();
isLoggedIn:boolean = false;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.authChange.subscribe(isAuth => {
      this.isLoggedIn = isAuth
    })
  }

  onClose(){
    this.drawerCloser.emit()
  }
}
