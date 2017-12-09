import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MoviesService } from './services/movies/movies.service';

import { SafeUrlPipe } from './pipes/safe-url.pipe';

import { MovieCardComponent } from './movies/movie-card/movie-card.component';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieViewComponent } from './movies/movie-view/movie-view.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieListComponent,
    MovieViewComponent,
    SafeUrlPipe,
    LoadingIndicatorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
