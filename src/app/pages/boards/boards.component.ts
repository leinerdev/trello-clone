import { Component } from '@angular/core';

import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {
  faBox,
  faWaveSquare,
  faClock,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

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
  public faAngleUp = faAngleUp;
  public faAngleDown = faAngleDown;
  public faHeart = faHeart;
  public faBorderAll = faBorderAll;
  public faUsers = faUsers;
  public faGear = faGear;

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Item 1.1',
        },
        {
          label: 'Item 1.2',
        }
      ]
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Item 2.1',
        },
        {
          label: 'Item 2.2',
        }
      ]
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Item 3.1',
        },
        {
          label: 'Item 3.2',
        }
      ]
    }
  ];
}
