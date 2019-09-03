import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',// - accessed through attribute,
  selector: '.app-servers', // accessed through class 'app-servers'
  // selector: 'app-servers'// - accessed through html tag <app-servers>
  templateUrl: './servers.component.html', // have to be,either template or templateUrl- refers to html doc template:'<app-server></...>'
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(allowNewServer => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}
}
