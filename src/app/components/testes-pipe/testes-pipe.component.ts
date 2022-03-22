import { Component } from '@angular/core';

@Component({
  selector: 'app-testes-pipe',
  templateUrl: './testes-pipe.component.html',
  styleUrls: ['./testes-pipe.component.scss']
})
export class TestesPipeComponent {

  participant: any = {
    date: new Date(2021, 9, 26),
    price: 35,
    percent: 84.65
  }


}
