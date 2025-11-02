// news.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ForumService } from '../service/forum.service';
import { ForumParameters } from '../model/ForumParameters';

@Injectable({ providedIn: 'root' })
export class NewsResolver implements Resolve<ForumParameters[] | null> {
  constructor(private forumService: ForumService, private router: Router) { }


  resolve(route: ActivatedRouteSnapshot): ForumParameters[] | null {
    const id = Number(route.paramMap.get('id'));
    const news = this.forumService.getSubjects();

    if (news === undefined) {
      this.router.navigate(['/foro']);
      return null;
    }

    return news;
  }
}
