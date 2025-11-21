import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryColorPipe } from '../../pipes/category-color-pipe';
import { NewsParameters } from '../../model/NewsParameters';
import { MilitaryAgoPipe } from '../../../common/pipes/military-ago.pipe';


@Component({
  selector: 'app-news-grid-a',
  imports: [CommonModule, RouterModule, CategoryColorPipe, MilitaryAgoPipe],
  templateUrl: './app-news-grid-a.component.html',
  styleUrl: './app-news-grid-a.component.scss'
})
export class AppNewsGridAComponent {
  @Input() items!: NewsParameters[];

  get gridMain() { return this.items[0]; }
  get gridBlocks() { return this.items.slice(1, 4); }
  get verticalFeat() { return this.items[4]; }
  get sideCards() { return this.items.slice(5, 8); }
  get gridTop3() { return this.items.slice(7, 10); }
  get gridBottom2() { return this.items.slice(10, 12); }
}
