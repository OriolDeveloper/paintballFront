import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from './common/service/theme.service';
import { NewsService } from './news/service/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, FontAwesomeModule]
})
export class AppComponent implements OnInit {
  isScrolled = false;
  isOpen = false;
  showLoginModal = false;
  selectedTab: 'login' | 'register' = 'login';
  faMoon = faMoon;
  faSun = faSun;
  darkMode$: any;

  constructor(private router: Router, private newsService: NewsService, private themeService: ThemeService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeLoginModal();
        this.isOpen = false;
        this.selectedTab = 'login';
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    document.addEventListener('scroll', this.onScroll, true);
  }


  onScroll = (): void => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.isScrolled = scrollTop > 20;
  };


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

  toggleTheme(): void {
    this.themeService.toggleDarkMode();
  }

}