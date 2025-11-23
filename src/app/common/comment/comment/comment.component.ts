import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { commentsDto } from '../model/commentsDto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment',
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent implements OnChanges {
  @Input() comment!: commentsDto;
  @Output() reply = new EventEmitter<{ parentId: number; content: string }>();

  toggle = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['comment']) {
    }
  }

  sendReply(content: string) {
    if (!content.trim()) return;
    this.reply.emit({ parentId: this.comment.id, content });
    this.toggle = false;
  }

  onChildReply(event: { parentId: number; content: string }) {
    this.reply.emit(event);
  }
}
