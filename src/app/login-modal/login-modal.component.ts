import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-modal.component.html',
})
export class LoginModalComponent {
  @Input() show = false;
  @Output() close = new EventEmitter<void>();

  selectedTab: 'login' | 'register' = 'login';

  switchTab(tab: 'login' | 'register') {
    this.selectedTab = tab;
  }

  closeModal() {
    this.close.emit();
  }
}