
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from './recipe';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  

  recipes : Recipe[] = [
];

  
  constructor(private httpClient:HttpClient) { }

   openDetailedRecipe(recipe){
  
   }

  ngOnInit(): void {
  
  }

}
