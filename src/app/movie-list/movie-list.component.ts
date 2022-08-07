import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Movie } from '../Models/movie';
import { MovieState } from '../Store/Reducers/movie.reducers';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies$ = this.store.select('movies');
  constructor(private store: Store<MovieState>) { }
  ngOnInit(): void { }
}
