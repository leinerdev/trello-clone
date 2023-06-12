import { Component, OnInit } from '@angular/core';
import { FakeApiService } from 'src/app/services/fake-api.service';

export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
}

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styles: [
  ]
})
export class ScrollComponent implements OnInit {
  products: Product[] = [];
  constructor(private fakeApi: FakeApiService) {}

  ngOnInit(): void {
    this.fakeApi.getItems().subscribe(data => this.products = data);
  }
}
