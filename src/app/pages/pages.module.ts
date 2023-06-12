import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { BtnComponent } from '../components/btn/btn.component';
import { BoardsComponent } from './boards/boards.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { BoardComponent } from './board/board.component';
import { TodoDialogComponent } from '../components/todo-dialog/todo-dialog.component';
import { ScrollComponent } from './scroll/scroll.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogModule } from '@angular/cdk/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    LoginComponent,
    BoardsComponent,
    BoardComponent,
    TodoDialogComponent,
    ScrollComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BtnComponent,
    NavbarComponent,
    FontAwesomeModule,
    CdkAccordionModule,
    DragDropModule,
    DialogModule,
    ScrollingModule,
    CdkTableModule
  ]
})
export class PagesModule { }
