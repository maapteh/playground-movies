import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';


import { MoviesService } from './services/movies/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isLoading:boolean = true;
  public title = 'Cinema';
  public version = environment.version;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    console.log('app component');

    this.moviesService.load()
    .then(movies => {
      this.isLoading = false;
    });
  }

}
