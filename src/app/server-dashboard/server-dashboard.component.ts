import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-dashboard',
  templateUrl: './server-dashboard.component.html',
  styleUrls: ['./server-dashboard.component.css']
})
export class ServerDashboardComponent implements OnInit {
  servers:string[]=[];
  serverName:string='';
  isServersEmpty:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  addServer(){
   if(this.serverName.length>0){
    this.servers.push(this.serverName);
    this.isServersEmpty=false;
   }else{
     console.log("server name is empty!!!");
   }
  }

}
