import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  standalone: true,
  imports: [
    CommonModule
  ],
  styles: [
  ]
})
export class BtnComponent implements OnInit {
  @Input() typeBtn: 'submit' | 'button' | 'reset' = 'button';
  @Input() color: string = 'primary';

  ngOnInit(): void {

  }

  get colors() {
    return {
      'text-white': this.color === 'success' || this.color === 'primary' || this.color === 'red',
      'text-gray-700': this.color === 'gray-light',
      'bg-success-700': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      'bg-primary-700': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-red-700': this.color === 'red',
      'hover:bg-red-800': this.color === 'red',
      'focus:ring-red-300': this.color === 'red',
      'bg-sky-700': this.color === 'sky',
      'hover:bg-sky-800': this.color === 'sky',
      'focus:ring-sky-300': this.color === 'sky',
      'bg-gray-200': this.color === 'gray-light',
      'hover:bg-gray-500': this.color === 'gray-light',
      'focus:ring-gray-50': this.color === 'gray-light'
    };
  }
}
