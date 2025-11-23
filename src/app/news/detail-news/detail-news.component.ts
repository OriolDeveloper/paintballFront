import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewsService } from '../service/news.service';
import { NewsParameters } from '../model/NewsParameters';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from "../../common/header/header.component";
import { CommentComponent } from '../../common/comment/comment/comment.component';
import { commentsDto } from '../../common/comment/model/commentsDto';
import { AuthenticationService, UserDto } from '../../login-modal/service/authentication.service';

@Component({
  selector: 'app-detail-news',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HeaderComponent,
    CommentComponent
  ],
  templateUrl: './detail-news.component.html',
  styleUrl: './detail-news.component.scss'
})
export class DetailNewsComponent implements OnInit {
  news!: NewsParameters;
  comments: commentsDto[] = [];
  commentForm: FormGroup;
  userDto!: UserDto | null;
  id:any;
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.commentForm = this.fb.group({
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('idNoticia'));
    this.authService.user$.subscribe(user => {
      this.userDto = user;
    });

    this.newsService.getNew(this.id).subscribe(news => {
      this.news = news;
      this.loadComments();
    });
  }
  loadComments() {
    this.newsService.getComments(this.news.newsDto.id).subscribe(res => {
      this.comments = this.buildTree(res);
    });
  }

  buildTree(list: commentsDto[]): commentsDto[] {
    const map = new Map<number, commentsDto>();

    list.forEach(c => {
      c.replies = c.replies || [];
      map.set(c.id, c);
    });

    const roots: commentsDto[] = [];

    list.forEach(c => {
      if (c.parentId) {
        const parent = map.get(c.parentId);
        if (parent) parent.replies.push(c);
      } else {
        roots.push(c);
      }
    });

    return roots;
  }

  sendComment() {
  if (!this.userDto) return;

  this.newsService.addComment({
    userId: this.userDto.id,
    newsId: this.news.newsDto.id,
    parentId: null,
    content: this.commentForm.value.content
  }).subscribe(() => {
    this.commentForm.reset();
    this.loadComments();
  });
}

// Responder a un comentario
openReply(event: { parentId: number; content: string }) {
  if (!this.userDto) return;

  this.newsService.addComment({
    userId: this.userDto.id,
    newsId: this.news.newsDto.id,
    parentId: event.parentId,
    content: event.content
  }).subscribe(() => this.loadComments());
}
}
