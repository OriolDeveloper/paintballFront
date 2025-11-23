import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryColorPipe } from '../../pipes/category-color-pipe';
import { NewsParameters } from '../../model/NewsParameters';
import { MilitaryAgoPipe } from '../../../common/pipes/military-ago.pipe'
import { faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryDto } from '../../service/category.service';
import { UserDto } from '../../../login-modal/service/authentication.service';
import { NewsService } from '../../service/news.service';


@Component({
  selector: 'app-news-grid-a',
  imports: [CommonModule, RouterModule, CategoryColorPipe, MilitaryAgoPipe, FontAwesomeModule],
  templateUrl: './app-news-grid-a.component.html',
  styleUrl: './app-news-grid-a.component.scss'
})

export class AppNewsGridAComponent {
  constructor(private newsService: NewsService) { }
  @Input() items!: NewsParameters[];
  @Input() categories!: CategoryDto[];
  @Input() user!: UserDto | null;
  @Output() modifyModal = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
  @Output() edit = new EventEmitter<any>(); 
  faTrash = faTrash;
  faEdit = faEdit;
  faPlus = faPlus;

  get gridMain() { return this.items[0]; }
  get gridBlocks() { return this.items.slice(1, 4); }
  get verticalFeat() { return this.items[4]; }
  get sideCards() { return this.items.slice(5, 8); }
  get gridTop3() { return this.items.slice(7, 10); }
  get gridBottom2() { return this.items.slice(10, 12); }

showModifyModal(item: any) {
  this.edit.emit(item);
}

confirmDelete(newsId: number) {
  if (confirm('¿Estás seguro que quieres eliminar esta noticia?')) {
    alert(`Eliminar noticia con id: ${newsId}`);
    this.deleteNew(newsId);
  }
}

deleteNew(newsId: number) {
  this.newsService.deleteNew(newsId).subscribe({
    next: () => {
      console.log('Noticia eliminada');
    },
    error: (err) => {
      console.error('Error al eliminar noticia', err);
    }
  });
}
      closeModal() {
    this.close.emit();
  }
}
