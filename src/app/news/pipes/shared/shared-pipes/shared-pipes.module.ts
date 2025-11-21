import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryColorPipe } from '../../category-color-pipe';
import { MilitaryAgoPipe } from '../../../../common/pipes/military-ago.pipe';

@NgModule({
  imports: [CommonModule, CategoryColorPipe, MilitaryAgoPipe],
  declarations: [],
  exports: [CategoryColorPipe, MilitaryAgoPipe],
})
export class SharedPipesModule { }
