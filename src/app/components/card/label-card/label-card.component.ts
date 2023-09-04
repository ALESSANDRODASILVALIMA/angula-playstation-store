import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-card',
  templateUrl: './label-card.component.html',
  styleUrls: ['./label-card.component.css']
})
export class LabelCardComponent {

  @Input() labelCardTexto:string = "";
}
