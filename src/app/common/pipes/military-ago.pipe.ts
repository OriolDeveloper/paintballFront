import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'militaryAgo',
  standalone: true
})
export class MilitaryAgoPipe implements PipeTransform {

  transform(value: string | Date | undefined): string {
    if (!value) return '';

    const now = new Date();
    const oldDate = new Date(value);

    const diffMs = now.getTime() - oldDate.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    let result = '';

    if (diffDays < 1) {
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      if (diffHours <= 0) result = 'now';
      else result = `${diffHours}h`;
    }
    else if (diffDays < 30) {
      result = `${diffDays}d`;
    }
    else {
      const months = Math.floor(diffDays / 30);
      if (months < 12) {
        result = `${months}m`;
      } else {
        const years = Math.floor(months / 12);
        result = `${years}a`;
      }
    }
    if (result === 'now') return 'ahora';
    return `hace ${result}`;
  }
}
