import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/item';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }


  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>("http://localhost:52818/api/items");
  }
  getItemById(id: number): Observable<Item[]> {
    if (id == null) {return this.getItems(); }
    else { return this.http.get<Item[]>("http://localhost:52818/api/items/byCategoryId/" + id); }
  }
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>("http://localhost:52818/api/items", item);


  }

}
