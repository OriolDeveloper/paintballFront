import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Ensure HomeComponent is standalone
import { NewsComponent } from './news/news.component';
import { DetailNewsComponent } from './news/detail-news/detail-news.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { NewsResolver } from './news/resolver/news.resolver';
import { ForumComponent } from './forum/forum.component';
import { ThreadsComponent } from './forum/threads/threads.component';
import { ThreadComponent } from './forum/threads/thread/thread.component';
import { ThreadsResolver } from './forum/threads/resolver/threads.resolver';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { noFooter: true } },
  { path: 'noticias', component: NewsComponent },
  {
    path: 'noticias/:idNoticia', component: DetailNewsComponent, resolve: {
      detailNews: NewsResolver
    }
  },
  { path: 'foro', component: ForumComponent },
  {
    path: 'foro/:idThreads', component: ThreadsComponent, resolve: {
      threads: ThreadsResolver
    }
  },
  {
    path: 'foro/:idThreads/:idThread', component: ThreadComponent, resolve: {
      thread: ThreadsResolver
    }
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Redirigir a error 404 si la ruta proporcionada no existe
  { path: '**', redirectTo: '/not-found' }
];