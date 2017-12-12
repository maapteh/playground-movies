import { TestBed, async } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { AppComponent } from './app.component';

import { MoviesService } from './services/movies/movies.service';
import { Movie } from './services/movies/movie';

const MOVIE_OBJECT: Movie = {
  id: '123',
  title: '123'
}

class MockService {
  public load(): Observable<Movie> {
    return of(MOVIE_OBJECT);
  }
}

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      providers: [
        MoviesService,
        {provide: MoviesService, useClass: MockService}
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Cinema'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Cinema');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.isLoading = true;

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Cinema');
  }));

});
