import { MatchCategoryPipe } from './match-category.pipe';

describe('MatchCategoryPipe', () => {
  it('create an instance', () => {
    const pipe = new MatchCategoryPipe();
    expect(pipe).toBeTruthy();
  });

  it('providing no category returns collection', () => {
    const pipe = new MatchCategoryPipe();
    const movies = [{
      id: 1,
      category: 1
    }];
    expect(pipe.transform(movies, null)).toBe(movies);
  });

  it('providing a category returns filtered collection', () => {
    const pipe = new MatchCategoryPipe();

    const movies = [{
      id: 1,
      category: 1
    }, {
      id: 2,
      category: 2
    }];

    const filtered = pipe.transform(movies, 1);

    expect(filtered.length).toBe(1);
    expect(filtered[0].id).toBe(1);

  });

});
