import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  idCategory: number;
  items: Item[];
  constructor(private route: ActivatedRoute, private itemService: ItemService) {
    this.route.params.subscribe(params => { this.idCategory = params['idc'];
     this.getItemsByCategory(); });


  }

  ngOnInit() {

  }

  getItemsByCategory() {
    if (this.idCategory == null)
      this.itemService.getItems().subscribe(data => this.items = data);
    else
      this.itemService.getItemById(this.idCategory).subscribe(data => this.items = data);
  }



}
