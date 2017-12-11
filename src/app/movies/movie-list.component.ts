import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../services/movies/movie';
import { MoviesService } from '../services/movies/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  selectedCategory: number;

  public isLoading:boolean = true;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService) {
  }

  ngOnInit() {
    console.log('list component');

    this.movies = this.moviesService.getMovies();

    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.selectedCategory = parseInt(params.category, 10);
    })

  }

}
