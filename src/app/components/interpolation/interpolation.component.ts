import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  title = 'Angular'
  name? = 'Amanda Kehl de Farias' 
  tutor? = 'Danillo Tonieti Castro'
  date? = new Date()
  team? = 'Turma de Angular - Só Vamu'

}
