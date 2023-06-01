import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from '../btn/btn.component';

import { OverlayModule } from '@angular/cdk/overlay';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BtnComponent, OverlayModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {
  public isOpen = false;
  public isOpenBody = false;

  public faBell = faBell;
  public faInfoCircle = faInfoCircle;
}
