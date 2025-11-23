import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { NewsService } from '../service/news.service';
import { NewsParameters } from '../model/NewsParameters';
import { Observable } from 'rxjs';

//Esta inutilizado por el behaviorSubject, dejar como ejemplo
@Injectable({ providedIn: 'root' })
export class NewsResolver implements Resolve<NewsParameters[] | null> {
  constructor(private newsService: NewsService, private router: Router) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NewsParameters[]> | null {
   return this.newsService.getAllNews();
  }
}