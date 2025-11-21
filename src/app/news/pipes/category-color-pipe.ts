// category-color.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryColor',
  standalone: true
})
export class CategoryColorPipe implements PipeTransform {
  transform(cat: string | undefined): string {

    switch ((cat || '').toLowerCase()) {

      case 'tácticas':
      case 'tacticas':
        return 'bg-orange text-black';

      case 'competición':
      case 'competicion':
        return 'bg-red text-black';

      case 'equipamiento':
        return 'bg-blue text-black';

      case 'field & terreno':
      case 'field':
      case 'terreno':
        return 'bg-green text-black';

      case 'eventos':
        return 'bg-yellow text-black';

      case 'cultura & comunidad':
      case 'cultura':
      case 'comunidad':
        return 'bg-neutral text-black';

      default:
        return 'bg-black/50';
    }
  }
}