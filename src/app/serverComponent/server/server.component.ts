import { Component, DoCheck, Input, OnInit,Output,EventEmitter } from '@angular/core';

import {FormControl} from '@angular/forms'
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit,DoCheck {
  @Input() server:string[]=[];
  @Output() data=new EventEmitter()
  public isOpen:boolean=false
  public updateData= new FormControl<string>('')
  constructor(){

  }
  ngOnInit(): void {
    // console.log(this.servers)
  }
ngDoCheck(){
console.log(this.server)
}
onEdit(){
  this.isOpen=true
}
onUpdate(){
this.data.emit(this.updateData)
}
}
