import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

import { Movie } from '../services/movies/movie';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieListComponent } from './movie-list.component';

import { MoviesService } from '../services/movies/movies.service';;

import { MatchCategoryPipe } from '../pipes/match-category.pipe';

const MOVIES_OBJECT: Movie[] = [{
  id: '123',
  title: '123'
}, {
  id: '456',
  title: '456'
}];

class MockService {
  public getMovies(): Movie[] {
    return MOVIES_OBJECT;
  }
}

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieCardComponent,
        MovieListComponent,
        MatchCategoryPipe,
      ],
      providers: [
        {
          provide: MoviesService,
          useClass: MockService
        }
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
