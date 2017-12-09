import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

import { MoviesService } from '../../services/movies/movies.service';
import { Movie } from '../../services/movies/movie';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {

  id: string;
  url: string;
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    // retrieve movie id from route
    this.id = this.route.snapshot.params.id;
    this.url = `https://www.youtube.com/embed/${this.id}?rel=0`;

    this.moviesService.getMovie(this.id)
    .subscribe(movie => this.movie = movie);
  }

}
