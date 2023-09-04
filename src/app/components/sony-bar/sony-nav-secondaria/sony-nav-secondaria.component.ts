import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { menusNavSecundariaButton, menusNavSecundariaTop } from '../../models/itens.submenus';

@Component({
  selector: 'app-sony-nav-secondaria',
  templateUrl: './sony-nav-secondaria.component.html',
  styleUrls: ['./sony-nav-secondaria.component.css'],
})
export class SonyNavSecondariaComponent {
  menusSecundariosCima = menusNavSecundariaTop;
  menusSecundariosButton = menusNavSecundariaButton;
  // menuAtual: [string, any][] = [];
  menuCima: { nome: string; rota: string, imagem:string }[] = [];
  menuBaixo: { nome: string; rota: string }[] = [];
  @Input() nomeMenu: string = 'nenhumMenuselecionado';
  ativo: boolean = true;
  verificaRepetido: string = '';

 

  constructor() {
    console.log(this.nomeMenu);
  }
  ngOnInit() {
    //this.getMenuSecundario(this.nomeMenu);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['nomeMenu'] && !changes['nomeMenu'].firstChange) {
      // O valor de nomeMenu foi alterado e não é a primeira mudança
      this.getMenuSecundario(this.nomeMenu);
      this.nomeMenu = '';
    }
  }

  getAtivo(a: boolean) {
    this.ativo = a;
    console.log(this.ativo);
    
  }

  getMenuSecundario(nome: string = this.nomeMenu) {
    console.log('entro no getMenuSecundario');
    if (nome !== '') {
      this.getAtivo(false);
    } else {
      this.getAtivo(true);
    }

    const menuObj = this.menusSecundariosCima[nome];
    const menuObj2 = this.menusSecundariosButton[nome];

    this.menuCima = [];
    this.menuBaixo = [];
    // Percorra as chaves do objeto para trazer dados para menu de CIMA
    for (const chave in menuObj) {
      if (menuObj.hasOwnProperty(chave)) {
        const jogo = menuObj[chave];

        // Crie um objeto com 'nome' e 'rota' e adicione à lista
        this.menuCima.push({ nome: jogo.nome, rota: jogo.rota, imagem: jogo.imagem });
      }
    }

    // Percorra as chaves do objeto para trazer dados para menu de BAIXO
    for (const chave in menuObj2) {
      if (menuObj2.hasOwnProperty(chave)) {
        const jogo = menuObj2[chave];

        // Crie um objeto com 'nome' e 'rota' e adicione à lista
        this.menuBaixo.push({ nome: jogo.nome, rota: jogo.rota });
      }
    }
    console.log(this.menuCima)
    console.log(this.menuBaixo)
  }
  
}
