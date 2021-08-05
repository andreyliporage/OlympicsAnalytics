import { Component } from '@angular/core';
import { Pais } from './Models/pais';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OlympicsAnalytics';

  showTable: boolean = false;
  paisEscolhido: Pais | undefined;

  constructor() {
    this.paisEscolhido = this.paises[0];
  }

  paises: Pais[] = [
    { name: "China", value: 70, ouro: 32, prata: 22, bronze: 16 },
    { name: "Estados Unidos", value: 79, ouro: 25, prata: 31, bronze: 23 },
    { name: "Japão", value: 40, ouro: 21, prata: 7, bronze: 12 },
    { name: "Grã-Bretanha", value: 48, ouro: 15, prata: 18, bronze: 15 },
    { name: "Austrália", value: 36, ouro: 15, prata: 4, bronze: 17 },
    { name: "ROC", value: 53, ouro: 14, prata: 21, bronze: 18 },
    { name: "Alemanha", value: 33, ouro: 9, prata: 8, bronze: 16 },
    { name: "França", value: 25, ouro: 6, prata: 10, bronze: 9 },
    { name: "Itália", value: 31, ouro: 6, prata: 9, bronze: 16 },
    { name: "Países Baixos", value: 23, ouro: 6, prata: 8, bronze: 9 },
  ];

  onSelect(pais: Pais) {
    this.showTable = true;
    this.paisEscolhido = this.paises.find(p => p.name === pais.name);
  }
}
