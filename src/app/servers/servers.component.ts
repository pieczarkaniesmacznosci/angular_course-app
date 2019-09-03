import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',// - accessed through attribute, 
  selector: '.app-servers',// accessed through class 'app-servers' 
  // selector: 'app-servers'// - accessed through html tag <app-servers>
  templateUrl: './servers.component.html',// has to be present at all times. either template or templateUrl - it refers to html doc template: '<app-server></app-server>'
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
