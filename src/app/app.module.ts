import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from './services/item.service';
import { CanegoryService } from './services/canegory.service';
import { ItemsComponent } from './items/items.component';
import { CategoryComponent } from './category/category.component';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: "item/:idc",
    component: ItemsComponent
  },
  {
    path: "item",
    component: ItemsComponent
  },
  { path: "addItem", component: AddItemComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CategoryComponent,
    AddItemComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CanegoryService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
