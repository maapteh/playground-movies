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

  url: string;

  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    // retrieve movie id from route
    const id = this.route.snapshot.params.id;

    this.moviesService.getMovie(id)
      .subscribe(movie => {
        this.movie = movie;
        // TODO: video can come from more sources in future
        this.url = `https://www.youtube.com/embed/${movie.id}?rel=0`;
      });

  }

}
