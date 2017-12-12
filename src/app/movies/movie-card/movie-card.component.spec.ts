import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MovieCardComponent } from './movie-card.component';

import { Movie } from '../../services/movies/movie';

const MOVIE_OBJECT: Movie = {
  id: '123',
  title: '123'
}

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        MovieCardComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    component.movie = MOVIE_OBJECT;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.movie.id).toEqual('123');
  });

  // TODO: test compiled card: const compiled = fixture.debugElement.nativeElement;

});
