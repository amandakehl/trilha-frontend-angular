import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})

export class ExemplosPipesComponent {

  dateValue = new Date()
  uppercaseValue: string = 'Texto transformado em letra maiúscula'
  lowercaseValue: string = 'TEXTO TRANSFORMADO EM LETRA MINÚSCULA'
  currencyValue: number = 50.80
  decimalValue: number = 100.2
  percentValue: number = 400

}
