import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { AppModule } from '../app.module';
import { BtnComponent } from '../components/btn/btn.component';
import { BoardsComponent } from './boards/boards.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    LoginComponent,
    BoardsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BtnComponent,
    NavbarComponent,
    FontAwesomeModule
  ]
})
export class PagesModule { }
