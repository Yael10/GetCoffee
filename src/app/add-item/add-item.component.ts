import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { Category } from '../models/category';
import { CanegoryService } from '../services/canegory.service';
import { Item } from '../models/item';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  addItemform: FormGroup;
  categories: Category[];
  constructor(private fb: FormBuilder, private itemService: ItemService, private categoryService: CanegoryService) { }

  ngOnInit() {
    this.addItemform = this.fb.group({
      description: ['',],
      busNumber: [''],
      phoneNumber: [''],
      categotyId: ['']
    })
    this.categoryService.getCategories().subscribe(data => this.categories = data);

  }
  add() {
    this.itemService.addItem(this.addItemform.value).subscribe();
    alert("התווסף בהצלחה!!!");
  }
}
