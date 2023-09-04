import { Component, Output, EventEmitter, HostListener, Renderer2, ElementRef } from '@angular/core';
import { itensMenuSonyBar } from '../models/item.menu'
@Component({
  selector: 'app-sony-bar',
  templateUrl: './sony-bar.component.html',
  styleUrls: ['./sony-bar.component.css']
})
export class SonyBarComponent {
  itemMenu:string[] = itensMenuSonyBar;
  // @Output() alterarAtivo = new EventEmitter<boolean>();
  nomeMenuPai:string="";
  ativo: boolean = true;





  onAtivoChange(novoAtivo: boolean) {       
    console.log("Chegou"+novoAtivo)   
    this.ativo = !novoAtivo
    console.log("sony-bar-pai"+this.ativo)
  
}

  getMenu(nomeMenu:string){
    if(nomeMenu == this.nomeMenuPai){
      this.nomeMenuPai = ""
      this.onAtivoChange(false)
    }else{
    this.nomeMenuPai = nomeMenu;
    console.log(this.nomeMenuPai)
    this.onAtivoChange(true)
   }

  }

  
}
