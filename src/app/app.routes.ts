import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Ensure HomeComponent is standalone
import { NewsComponent } from './news/news.component';
import { DetailNewsComponent } from './news/detail-news/detail-news.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { NewsResolver } from './news/resolver/news.resolver';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'noticias', component: NewsComponent },
  { path: 'noticias/:id', component: DetailNewsComponent,   resolve: {
    detailNews: NewsResolver
  } },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Redirigir a error 404 si la ruta proporcionada no existe
  { path: '**', redirectTo: '/not-found' }
];