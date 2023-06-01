import { Component } from '@angular/core';

import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faBox, faWaveSquare, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styles: [
  ]
})
export class BoardsComponent {
  public faTrello = faTrello;
  public faBox = faBox;
  public faWaveSquare = faWaveSquare;
  public faClock = faClock;
}
