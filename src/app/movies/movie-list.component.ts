import { Component, OnInit } from '@angular/core';

import { Movie } from '../services/movies/movie';
import { MoviesService } from '../services/movies/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  public isLoading:boolean = true;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    console.log('list component');
    this.movies = this.moviesService.getMovies();
  }

}
