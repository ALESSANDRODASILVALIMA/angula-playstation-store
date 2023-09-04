import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-psn',
  templateUrl: './menu-psn.component.html',
  styleUrls: ['./menu-psn.component.css']
})
export class MenuPsnComponent {
  ativo:boolean = true;
  @Output() ativoChange: EventEmitter<boolean> = new EventEmitter<boolean>();
 constructor(){
  
 }
  onAtivoChange(){
    this.ativo = !this.ativo
    this.ativoChange.emit(this.ativo); 
    console.log("menu psn: "+ this.ativo)  
    
  }
}
