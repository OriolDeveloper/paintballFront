import { NewsFilterPipe } from './news-filter.pipe';

describe('CategoryFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new NewsFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
