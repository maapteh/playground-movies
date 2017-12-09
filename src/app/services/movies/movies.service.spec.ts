import { TestBed, inject } from '@angular/core/testing';
import { Headers, Http, HttpModule, Response } from '@angular/http';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        MoviesService
      ]
    });
  });

  it('should be created', inject([MoviesService], (service: MoviesService) => {
    expect(service).toBeTruthy();
  }));
});
