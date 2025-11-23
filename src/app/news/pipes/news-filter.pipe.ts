import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsFilter',
  standalone: true
})
export class NewsFilterPipe implements PipeTransform {

  transform(list: any[] | null | undefined, category?: string, dateRange?: string): any[] {

    if (!list || !Array.isArray(list)) return [];

    const cat = category?.trim().toLowerCase();
    const date = dateRange?.trim().toLowerCase();

    return list.filter(item => {
      const catOK = !cat || item?.category?.toLowerCase() === cat;
      const dateOK = !date || this.isInDateRange(item.publishedAt, date);
      return catOK && dateOK;
    });
  }

  private isInDateRange(publishedAt: string, selected: string): boolean {
    const created = new Date(publishedAt);
    const now = new Date();

    switch (selected) {
      case 'today':
        return created.toDateString() === now.toDateString();

      case 'week': {
        const start = new Date(now);
        start.setDate(now.getDate() - 7);
        return created >= start;
      }

      case 'month': {
        const start = new Date(now);
        start.setMonth(now.getMonth() - 1);
        return created >= start;
      }

      default:
        return true;
    }
  }
}
