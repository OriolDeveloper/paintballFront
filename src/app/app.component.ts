import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterModule } from '@angular/router';
import { NewsService } from './news/service/news.service';
import { NewsParameters } from './news/model/NewsParameters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule,CommonModule]
})
export class AppComponent {
  isOpen = false;
  showLoginModal = false;
  selectedTab: 'login' | 'register' = 'login';

  constructor(private router: Router, private newsService: NewsService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeLoginModal(); // Oculta modal
        this.isOpen = false; // Cierra menú
        this.selectedTab = 'login'; // Reinicia tab
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('isOpen:', this.isOpen);
      console.log('showLoginModal:', this.showLoginModal);
    }, 1000);
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  openLoginModal(): void {
    this.showLoginModal = true;
    this.selectedTab = 'login';
  }
  
  closeLoginModal(): void {
    this.showLoginModal = false;
  }
}