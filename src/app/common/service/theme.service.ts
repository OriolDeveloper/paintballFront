import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private darkMode = new BehaviorSubject<boolean>(false);
    darkMode$ = this.darkMode.asObservable();

    constructor() {
        this.initializeTheme();
    }

    toggleDarkMode() {
        const isDark = !this.darkMode.value;
        this.darkMode.next(isDark);
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    initializeTheme() {
        // Comprobar preferencia del sistema o localStorage
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: light)').matches;

        const isDark = savedTheme === 'light' || (!savedTheme && prefersDark);
        this.darkMode.next(isDark);
        document.documentElement.classList.toggle('light', isDark);
    }

    getCurrentTheme(): string {
        return this.darkMode.value ? 'dark' : 'light';
    }
}