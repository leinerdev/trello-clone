import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../pages/scroll/scroll.component';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  protected readonly URL = 'https://api.escuelajs.co/api/v1/products';

  constructor(protected http: HttpClient) { }

  getItems() {
    return this.http.get<Product[]>(this.URL);
  }
}
