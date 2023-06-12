import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

import { faBars, faCheckSquare, faCheckToSlot, faClock, faClose, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
import { ToDo } from 'src/app/models/todo.model';

interface InputData {
  todo: ToDo;
}
interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styles: [
  ],
})
export class TodoDialogComponent {
  public faClose = faClose;
  public faCheckToSlot = faCheckToSlot;
  public faBars = faBars;
  public faUser = faUser;
  public faTag = faTag;
  public faCheckSquare = faCheckSquare;
  public faClock = faClock;
  
  public todo: ToDo;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.todo = data.todo;
  }
  
  close() {
    this.dialogRef.close();
  }

  closeWithRta(rta: boolean) {
    this.dialogRef.close({
      rta,
    });
  }
}
