import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
serversValue:string[]=[]
serverContent:string=''

onServerCreate(server:HTMLInputElement){
this.serversValue.push(server.value)
server.value=''
}
onUpdate(data:string){
console.log(data)
}
}
