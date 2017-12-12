import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

import { MoviesService } from './services/movies/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  // when we have our movies we will proceed with our router outlet
  isLoading:boolean = true;

  // main application showing logo and header/footer
  title = 'Cinema';

  public version = environment.version;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    console.log('app component');
    // retrieve our movies
    this.moviesService.load()
    .subscribe(movies => {
      console.log(movies);
      this.isLoading = false;
    });

  }

}
