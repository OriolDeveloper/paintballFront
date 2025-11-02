// news.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { NewsService } from '../service/news.service';
import { NewsParameters } from '../model/NewsParameters';

@Injectable({ providedIn: 'root' })
export class NewsResolver implements Resolve<NewsParameters[] | null> {
  constructor(private newsService: NewsService, private router: Router) { }


  resolve(route: ActivatedRouteSnapshot): NewsParameters[] | null {
    const news = this.newsService.getNews();

    if (news === undefined) {
      this.router.navigate(['/noticias']);
      return null;
    }

    return news;
  }
}
