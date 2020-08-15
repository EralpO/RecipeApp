import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from './category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService:CategoryService) {}
  categories: Category[];
  

  ngOnInit(): void {
   this.categoryService.ListCategories().subscribe(data =>{
     this.categories = data
   })
  }
}
