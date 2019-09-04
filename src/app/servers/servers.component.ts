import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',// - accessed through attribute,
  // tslint:disable-next-line: component-selector
  selector: '.app-servers', // accessed through class 'app-servers'
  // selector: 'app-servers'// - accessed through html tag <app-servers>
  templateUrl: './servers.component.html', // have to be,either template or templateUrl- refers to html doc template:'<app-server></...>'
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server has been created';
  serverCreated = false;
  serverName = '';
  userName = '';
  servers = ['testServer', 'testServer2'];
  visible = true;
  log = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was creted, name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
  onUserNameClick() {
    this.userName = '';
  }
  onSwitchVisibility() {
    this.visible = !this.visible;
    this.log.push(new Date());
  }
}

/*
// Bindable Properties and Events
How do you know to which Properties or Events of HTML Elements you may bind?
You can basically bind to all Properties and Events - a good idea is to console.log()
the element you're interested in to see which properties and events it offers.

Important: For events, you don't bind to onclick but only to click (=> (click)).

The MDN (Mozilla Developer Network) offers nice lists of all properties and events
of the element you're interested in.
Googling for YOUR_ELEMENT properties  or YOUR_ELEMENT events  should yield nice results.
*/
