import { Component, OnInit } from '@angular/core';
import { FakeApiService } from 'src/app/services/fake-api.service';
import { Product } from '../scroll/scroll.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit {
  public products: Product[] = [];
  columns: string[] = ['price', 'id', 'cover', 'title'];

  constructor(private fakeApi: FakeApiService) { }

  ngOnInit(): void {
    this.fakeApi.getItems().subscribe(data => this.products = data);
  }
}
