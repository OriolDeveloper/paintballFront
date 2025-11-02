import { Component } from '@angular/core';
import { ForumParameters } from './model/ForumParameters';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ForumService } from './service/forum.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forum',
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent {
  news: ForumParameters[] = [];
  faTrash = faTrash;
  faEdit = faEdit;
  faPlus = faPlus;

  constructor(private forumService: ForumService, private router: Router) {

  }
  ngOnInit(): void {
    //Llamada al back para sacar la lista de Noticias
    this.news = this.forumService.getSubjects();
  }

  moreDetails(id: number) {
    this.router.navigate(['foro/' + id]);
  }
}
