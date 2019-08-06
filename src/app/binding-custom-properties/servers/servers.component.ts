import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  newServerName: string;
  newServerComponent: string;
  serverElements:any=[];
  constructor() { }

  ngOnInit() {
  }
  addServer(){
    let server={name:"test",content:"test-server-content",type:"server"};
    this.serverElements.push(server);
  }
  addBluePrint(){
    let blueprint={name:"test",content:"test-blueprint-content",type:"blueprint"};
    this.serverElements.push(blueprint);
  }
}
