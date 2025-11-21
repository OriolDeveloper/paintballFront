// news.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ThreadsService } from '../service/threads.service';
import { ThreadsParameters } from '../model/ThreadsParameters';

@Injectable({ providedIn: 'root' })
export class ThreadsResolver implements Resolve<ThreadsParameters | null> {
  constructor(private threadsService: ThreadsService, private router: Router) { }


  resolve(route: ActivatedRouteSnapshot): ThreadsParameters | null {
    const id = Number(route.paramMap.get('idThreads'));
    const threads = this.threadsService.getThreadId(id);

    if (threads === undefined) {
      this.router.navigate(['/foro']);
      return null;
    }

    return threads;
  }
}
