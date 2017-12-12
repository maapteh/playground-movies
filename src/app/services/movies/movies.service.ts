import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { Movie } from './movie';

@Injectable()
export class MoviesService {

  movies: Movie[] = [];

  private moviesUrl = `${environment.rootApi}/movies`;

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http
  ) { }

  // store data locally once from app component
  load(): Observable<Movie[]> {
    return this.http
      .get(this.moviesUrl, { headers: this.headers })
      .map((res: Response) => {
        this.movies = res.json();
        return res.json();
      });
  }

  // retrieve allready stored data
  getMovies(): Movie[] {
    console.log('getting stored movies loaded on app bootstrap');
    return this.movies;
  }

  getMovie(id: string): Observable<Movie> {
    // TODO: if we have movie available (current list)
    // ELSE: retrieve movie/{id} from API and pass that one (bookmark or google)
    return of(this.movies.find(movie => movie.id === id));
  }

}
