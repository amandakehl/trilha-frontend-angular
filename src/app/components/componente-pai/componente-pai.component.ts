import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  template: ""
})

export class ComponentePaiComponent {

  @Input() numeroComponente: number = 0;

  isPar(valor: number): string {
    return valor % 2 === 0 ? "par" : "ímpar";
  }

  isPrime(valor: number): string {
    for (let i = 2; i < valor; i++)
      if (valor % i === 0) {
        return "não é primo"
      }
    return "é primo"
  }
}

