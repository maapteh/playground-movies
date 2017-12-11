import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

// application
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// services
import { MoviesService } from './services/movies/movies.service';

// pipes
import { SafeUrlPipe } from './pipes/safe-url.pipe';

// generic components
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

// components
import { MovieListComponent } from './movies/movie-list.component';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';
import { MovieViewComponent } from './movies/movie-view/movie-view.component';
import { MatchCategoryPipe } from './pipes/match-category.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieListComponent,
    MovieViewComponent,
    SafeUrlPipe,
    LoadingIndicatorComponent,
    MatchCategoryPipe
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
