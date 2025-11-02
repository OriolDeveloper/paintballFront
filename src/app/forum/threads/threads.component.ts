import { Component } from '@angular/core';
import { ThreadsParameters } from './model/ThreadsParameters';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ThreadsService } from './service/threads.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-threads',
  imports: [CommonModule, RouterModule],
  templateUrl: './threads.component.html',
  styleUrl: './threads.component.scss'
})
export class ThreadsComponent {
  thread = {} as ThreadsParameters;
  idThreads: any;
  constructor(private route: ActivatedRoute, private threadsService: ThreadsService) { }

  ngOnInit() {
    this.idThreads = Number(this.route.snapshot.paramMap.get('idThreads'));
    this.thread = this.threadsService.getNewsId(this.idThreads)!;
  }
}
