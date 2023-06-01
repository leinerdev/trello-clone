import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BoardsComponent } from './boards/boards.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'boards', component: BoardsComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
