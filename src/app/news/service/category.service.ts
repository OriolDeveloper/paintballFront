import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environment/environment';

export interface CategoryDto {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = environment.rutaBack + 'category/';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]> (`${this.apiUrl}allCategory`);
  }
}
