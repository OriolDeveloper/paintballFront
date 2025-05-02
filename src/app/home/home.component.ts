import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from '../users/model/Usuario';
import { UsuarioService } from '../common/service/usuario.service';
import { CommonModule } from '@angular/common';
import { NewsService } from '../news/service/news.service';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true
})
export class HomeComponent {
  usuarios: Usuario[] = [];
  // set the target element that will be collapsed or expanded (eg. navbar menu)
  isOpen = false;
  showLoginModal = false;
  news: any;

  constructor(private usuarioService: UsuarioService, private newsService: NewsService, private router : Router) { }
  
  currentIndex = 0;
  intervalId: any;
  isPaused = false;
  intervalTime = 2000;

  ngOnInit() {
    this.news = this.newsService.getNews();
    this.startRotation();
    this.usuarioService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  goNewsDetails(id: number) {
    this.router.navigate(['noticias/' + id]);
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  startRotation() {
    this.intervalId = setInterval(() => {
      if (!this.isPaused) {
        this.currentIndex = (this.currentIndex + 1) % this.news.length;
      }
    }, this.intervalTime);
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  openLoginModal() {
    this.showLoginModal = true;
  }

  closeLoginModal() {
    this.showLoginModal = false;
  }

}
