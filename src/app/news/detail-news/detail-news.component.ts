import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewsService } from '../service/news.service';
import { NewsParameters } from '../model/NewsParameters';

@Component({
  selector: 'app-detail-news',
  imports: [CommonModule, RouterModule],
  templateUrl: './detail-news.component.html',
  styleUrl: './detail-news.component.scss',
  standalone: true
})
export class DetailNewsComponent implements OnInit {
  @Input() detailNews = {} as NewsParameters;

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('idNoticia'));
    
  }
}
