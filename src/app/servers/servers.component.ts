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
  userName = '';
  userCreationStatus = 'No new users added';
  

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
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = event.target.value;
  // }

  onCreateUser() {
    this.userCreationStatus = 'New username is ' + this.userName;
  }

}
