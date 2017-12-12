import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MovieViewComponent } from './movie-view.component';

import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

describe('MovieViewComponent', () => {
  let component: MovieViewComponent;
  let fixture: ComponentFixture<MovieViewComponent>;

  const routerStub = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieViewComponent,
        SafeUrlPipe
      ],
      providers: [
        { provide: Router, useValue: routerStub },
        ActivatedRoute
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
