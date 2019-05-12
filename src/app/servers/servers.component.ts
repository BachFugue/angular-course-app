import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  userName = '';
  userCreationStatus = 'No new users added';
  servers = ['Test Server', 'Test Server 2'];
  showDetails = true;
  detailsLog = [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      console.log(this.userName.length);
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = event.target.value;
  // }

  onCreateUser() {
    this.userCreationStatus = 'New username is ' + this.userName;
  }

  toggleDetails() {
    this.detailsLog.push(new Date);
    return this.showDetails ? this.showDetails = false : this.showDetails = true;
  }

  getColor(i) {
    return i >= 4 ? 'dodgerblue' : '';
  }

}
