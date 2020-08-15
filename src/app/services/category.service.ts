import { Injectable } from '@angular/core';
import { Category } from '../category/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:8080/api/category/list";
  ListCategories():Observable<Category[]>{
   return this.http
    .get<Category[]>(this.path);
  }
}
