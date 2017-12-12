import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MovieListComponent } from './movie-list.component';

import { MatchCategoryPipe } from '../pipes/match-category.pipe';

import { Movie } from '../services/movies/movie';

const MOVIES_OBJECT: Movie[] = [{
  id: '123',
  title: '123'
}, {
  id: '456',
  title: '456'
}];

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieListComponent,
        MatchCategoryPipe,
      ],
      imports: [
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    component.movies = MOVIES_OBJECT;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
