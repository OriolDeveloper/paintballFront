import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NewsService } from './service/news.service';
import { Router, RouterModule } from '@angular/router';
import { NewsParameters } from './model/NewsParameters';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from '../common/header/header.component';


@Component({
  selector: 'app-news',
  imports: [CommonModule, RouterModule, FontAwesomeModule, HeaderComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  standalone: true
})
export class NewsComponent implements OnInit {
  news: NewsParameters[] = [];
  newFeatured: NewsParameters[] = [];
  faTrash = faTrash;
  faEdit = faEdit;
  faPlus = faPlus;
  fillerCards: number[] = [];

  constructor(private newsService: NewsService, private router: Router) {

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.fillerCards = this.getFillerCards(this.news.length);
  }

  ngOnInit(): void {
    //Llamada al back para sacar la lista de Noticias
    this.news = this.newsService.getNews();
    this.newFeatured = this.news.filter(noticia => noticia.featured === true);
    this.fillerCards = this.getFillerCards(this.news.length);
  }

  moreDetails(id: number) {
    this.router.navigate(['noticias/' + id]);
  }

  getActiveColumns(): number {
    const width = window.innerWidth;

    if (width >= 1024) return 3;
    if (width <= 1024 && width >= 640) return 2;
    return 1;
  }

  getFillerCards(newsLength: number): number[] {
    const columns = this.getActiveColumns();
    const visibleCards = newsLength - 1; // excluyendo la destacada
    const remainder = visibleCards % columns;
    const fillersNeeded = remainder === 0 ? 0 : columns - remainder;

    return Array(fillersNeeded).fill(0).map((_, i) => i);
  }

}
