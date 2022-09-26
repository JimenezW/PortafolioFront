import { Component, OnInit } from '@angular/core';

interface SideNavToggle {
  screenWidth : number,
  collased:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  title = 'PortafolioApp';

  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideNav(data: SideNavToggle) : void {
    this.isSideNavCollapsed = data.collased;
    this.screenWidth = data.screenWidth;

  }
}
