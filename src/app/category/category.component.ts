import { Component, OnInit } from '@angular/core';
import { CanegoryService } from '../services/canegory.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CanegoryService) { }
categories:Category[];
  ngOnInit() {
   this.categoryService.getCategories().subscribe(data=>this.categories=data);
    
  }

  getcategoryies(){
    return this.categories;
  }

}
