import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../common/header/header.component';
import { NewsService } from './service/news.service';
import { NewsParameters } from './model/NewsParameters';
import { AppNewsGridAComponent } from './app-news-grid/app-news-grid-a/app-news-grid-a.component';
import { AppNewsGridBComponent } from './app-news-grid/app-news-grid-b/app-news-grid-b.component';
import { AuthenticationService, UserDto } from '../login-modal/service/authentication.service';
import { CreateNewComponent } from "./create-news/create-new/create-new.component";

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  imports: [CommonModule, RouterModule, FontAwesomeModule, HeaderComponent, AppNewsGridAComponent, AppNewsGridBComponent, FormsModule, CreateNewComponent]
})
export class NewsComponent implements OnInit {
  userDto!: UserDto | null;
  faPlus = faPlus;
  isShowCreateNewModal = false;
  categorias = ['Terreno', 'Tacticas', 'Equipamiento'];
  selectedCategory = '';
  selectedDate = '';

  news: NewsParameters[] = [];
  filteredNews: NewsParameters[] = [];

  blocks: NewsParameters[][] = [];

  pageSize = 13;
  page = 0;

  constructor(private newsService: NewsService, private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    this.news = this.newsService.getNews();
    this.loadMore();
    this.authService.user$.subscribe(user => {
      this.userDto = user;
    });
  }

  //Se ejecuta cuando accedemos a el desde el html
  get finished(): boolean {
    const list = this.filteredNews.length ? this.filteredNews : this.news;
    return (this.page * this.pageSize) >= list.length;
  }


  loadMore() {
    //Si viene vacio sacamos todas las noticias
    const list = this.filteredNews.length ? this.filteredNews : this.news;

    const start = this.page * this.pageSize;
    const end = start + this.pageSize;

    let slice = list.slice(start, end);

    if (!slice.length) return;

    // añade placeholders si faltan para completar 12
    while (slice.length < 12) {
      slice.push(this.placeholder());
    }

    this.blocks.push(slice);
    this.page++;
  }

  applyFilters() {
    const catNew = this.selectedCategory.trim().toLowerCase();
    const dateNew = this.selectedDate.trim().toLowerCase();

    this.filteredNews = this.news.filter(n => {
      const category = !catNew || n.category?.toLowerCase() === catNew;
      const date = !dateNew || this.isInDateRange(n.dateCreated, dateNew);
      return category && date;
    });

    this.blocks = [];
    this.page = 0;
    this.loadMore();
  }

  private placeholder(): NewsParameters {
    return {
      id: 0,
      title: 'Proximamente',
      description: 'Proximamente',
      category: '',
      imageBytes: '/assets/img/manchas.jpg',
      dateCreated: new Date()
    } as NewsParameters;
  }

  private isInDateRange(dateCreated: string, range: string): boolean {
    const created = new Date(dateCreated);
    const now = new Date();

    if (range === 'today') return created.toDateString() === now.toDateString();

    if (range === 'week') {
      const s = new Date(now);
      s.setDate(now.getDate() - 7);
      return created >= s;
    }

    if (range === 'month') {
      const s = new Date(now);
      s.setMonth(now.getMonth() - 1);
      return created >= s;
    }

    return true;
  }

  moreDetails(id: number) {
    this.router.navigate(['noticias/' + id]);
  }

  openCreateNewModal(): void {
    this.isShowCreateNewModal = true;
  }

  closeCreateNewModal(): void {
    this.isShowCreateNewModal = false;
  }
}
