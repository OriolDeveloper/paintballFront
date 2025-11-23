import { Injectable } from '@angular/core';
import { NewsParameters } from '../model/NewsParameters';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { commentsDto } from '../../common/comment/model/commentsDto';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = environment.rutaBack + 'news/';
  private newsListSave = new BehaviorSubject<NewsParameters[]>([]);
  public newsList$ = this.newsListSave.asObservable();

  private newOne = new BehaviorSubject<NewsParameters[]>([]);
  public new$ = this.newsListSave.asObservable();
  constructor(private http: HttpClient) { }

  getAllNews(): Observable<NewsParameters[]> {
     return this.http.get<NewsParameters[]>(`${this.apiUrl}allNews`).pipe(
      tap(news => this.newsListSave.next(news))
    );
  }

  getNew(id: number): Observable<NewsParameters> {
    return this.http.get<NewsParameters>(`${this.apiUrl}getNew/${id}`);
  }

  updateNew(news: any, userId: number) {
  const formData = new FormData();
  for (const key in news) {
    if (news[key] !== null && news[key] !== undefined) {
      formData.append(key, news[key]);
    }
  }

  formData.append('userId', userId.toString());

return this.http.put(`${this.apiUrl}updateNew`, formData, {
      withCredentials: true,
    }).pipe(
      tap(() => this.refreshNews()) //Actualizamos la lista al editar
    );
}

  
  newAdd(formNews: FormGroup, idUsuario:number) {
  //Transformamos nuestro formGroup en data para poder pasar imgs al back
  const formData = new FormData();

  Object.entries(formNews.value).forEach(([key, value]) => {
    // Si el campo es un File, lo agregamos como file
    if (value instanceof File) {
      formData.append(key, value);
    } else if (value !== null && value !== undefined) {
      formData.append(key, value.toString());
    }
    formData.append('authorId', idUsuario.toString());
  });
  return this.http.post(`${this.apiUrl}addNew`, formData).pipe(
      tap(() => this.refreshNews())
  );
  }

  deleteNew(id: number) {
  return this.http.delete(`${this.apiUrl}deleteNew/${id}`, {responseType: 'text', withCredentials: true }).pipe(
    tap(() => {
      const current = this.newsListSave.value.filter(n => n.newsDto.id !== id);
      this.newsListSave.next(current);
      this.refreshNews();
    })
  );
}

    refreshNews() {
    this.http.get<NewsParameters[]>(`${this.apiUrl}allNews`).subscribe(news => {
      this.newsListSave.next(news);
    });
  }
  
  getComments(newsId: number) {
    return this.http.get<commentsDto[]>(`${this.apiUrl}${newsId}/comments`);
  }

  addComment(req: any) {
    return this.http.post(`${this.apiUrl}addComment`, req);
  }
}
