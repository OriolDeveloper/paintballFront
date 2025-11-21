import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from './common/service/theme.service';
import { NewsService } from './news/service/news.service';
import { AuthenticationModalComponent } from "./login-modal/authentication.component";
import { provideHttpClient } from '@angular/common/http';
import { AuthenticationService, UserDto } from './login-modal/service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, FontAwesomeModule, AuthenticationModalComponent]
})
export class AppComponent implements OnInit {
  isScrolled = false;
  isOpen = false;
  isShowLoginModal = false;
  selectedTab: 'login' | 'register' = 'login';
  faMoon = faMoon;
  faSun = faSun;
  showFooter = true;
  darkMode$: any;
  userDto: UserDto | null = null;
  constructor(private router: Router, private newsService: NewsService, private themeService: ThemeService
    , private authService: AuthenticationService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeLoginModal();
        this.isOpen = false;
        this.selectedTab = 'login';
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        const route = this.router.routerState.root.firstChild;
        this.showFooter = !route?.snapshot.data['noFooter'];
      }
    });

    this.authService.user$.subscribe({
      next: user => {
        this.userDto = user;
      },
      error: err => this.userDto = null
    });

    this.authService.loadUserSession().subscribe();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    this.isScrolled = scrollTop > 2;
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  openLoginModal(): void {
    this.isShowLoginModal = true;
    this.selectedTab = 'login';
  }

  closeLoginModal(): void {
    this.isShowLoginModal = false;
  }

  toggleTheme(): void {
    this.themeService.toggleDarkMode();
  }


  logout() {
    this.authService.logout().subscribe(() => {
      this.userDto = null;
    });
  }
}