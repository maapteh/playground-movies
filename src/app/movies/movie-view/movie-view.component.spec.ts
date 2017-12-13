/*
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MovieViewComponent } from './movie-view.component';

import { MoviesService } from '../../services/movies/movies.service';
import { Movie } from '../../services/movies/movie';

import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

const MOVIE_OBJECT: Movie = {
  id: '123',
  title: '123'
};

class MockService {
  public getMovie(id): Observable<Movie> {
    return of(MOVIE_OBJECT);
  }
}

describe('MovieViewComponent', () => {
  let component: MovieViewComponent;
  let fixture: ComponentFixture<MovieViewComponent>;

  const routerStub = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieViewComponent,
        SafeUrlPipe
      ],
      providers: [
        {
          provide: MoviesService,
          useClass: MockService
        },
        {
          provide: Router,
          useValue: routerStub
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: 123})
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
