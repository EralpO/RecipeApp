import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../recipe-list/recipe';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  path = "http://localhost:8080/api/recipe/list";
  constructor(private http:HttpClient) { }

  ListRecipes():Observable<Recipe[]>{
          return this.http.get<Recipe[]>(this.path)
  }
}
