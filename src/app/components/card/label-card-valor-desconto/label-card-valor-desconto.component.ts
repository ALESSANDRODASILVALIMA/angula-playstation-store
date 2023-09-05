import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-card-valor-desconto',
  templateUrl: './label-card-valor-desconto.component.html',
  styleUrls: ['./label-card-valor-desconto.component.css']
})
export class LabelCardValorDescontoComponent {

  @Input() valor:number = 0;
  @Input() desconto:number = 0;
}
