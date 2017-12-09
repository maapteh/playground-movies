import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent }   from './movies/movie-list.component';
import { MovieViewComponent }   from './movies/movie-view/movie-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
