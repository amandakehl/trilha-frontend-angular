import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular'
  name? = 'Amanda Kehl de Farias' 
  tutor? = 'Danillo Tonieti Castro'
  date? = new Date()
  team? = 'Turma de Angular - Só Vamu'
}