import { Component } from '@angular/core';
import { ThreadsParameters } from './model/ThreadsParameters';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ThreadsService } from './service/threads.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../common/header/header.component';

@Component({
  selector: 'app-threads',
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './threads.component.html',
  styleUrl: './threads.component.scss'
})
export class ThreadsComponent {
  thread: ThreadsParameters[] = [];
  idThreads: any;
  colors: string[] = ['bg-orange', 'bg-red', 'bg-blue'];
  constructor(private route: ActivatedRoute, private threadsService: ThreadsService) { }

  ngOnInit() {
    this.idThreads = Number(this.route.snapshot.paramMap.get('idThreads'));
    this.thread = this.threadsService.getThreads()!;
  }

}
