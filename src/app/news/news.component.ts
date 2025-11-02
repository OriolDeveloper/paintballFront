import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NewsService } from './service/news.service';
import { Router, RouterModule } from '@angular/router';
import { NewsParameters } from './model/NewsParameters';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-news',
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  standalone: true
})
export class NewsComponent implements OnInit {
  news: NewsParameters[] = [];
  faTrash = faTrash;
  faEdit = faEdit;
  faPlus = faPlus;

  constructor(private newsService: NewsService, private router: Router) {

  }
  ngOnInit(): void {
    //Llamada al back para sacar la lista de Noticias
    this.news = this.newsService.getNews();
  }

  moreDetails(id: number) {
    this.router.navigate(['noticias/' + id]);
  }


}
