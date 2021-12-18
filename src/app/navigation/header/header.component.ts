import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() drawerToggle = new EventEmitter<void>()

  loggedIn:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  onToggleSidenav(){
    this.drawerToggle.emit()
  }

}
