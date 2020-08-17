import { RecipeService } from './../services/recipe.service';

import { Component, OnInit } from '@angular/core';

import {Recipe} from './recipe';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  

  recipes : Recipe[] = [
];

  
  constructor(private recipeService:RecipeService) { }

  listRecipes(){
      this.recipeService.ListRecipes().subscribe(data =>{
        this.recipes = data;
        console.log(this.recipes)
      })
   }

  ngOnInit(): void {
    this.listRecipes();
  }

}
