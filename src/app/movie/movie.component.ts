import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Movie } from '../Models/movie';
import { getMovies, addMovies } from '../Store/Actions/movie.action';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movieForm = this.formBuilder.group({
    name: new FormControl(),
    earning: new FormControl(),
    date: new FormControl(),
  })
  movies: Movie[] = [];
  newMovie: Movie = new Movie();
  title = 'movieApp';
  constructor(private store: Store, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.store.dispatch(getMovies());
    // this.dataService.getMovies().subscribe((movies: Movie[]) => {
    //   this.movies = movies;
    // });
  }

  addNewMovies(): void {
    this.newMovie = {
      name: this.movieForm.value.name,
      earning: this.movieForm.value.earning,
      releaseDate: new Date(),
      userName: 'Manzoor'
    }
    this.store.dispatch(addMovies(this.newMovie));
    // this.store.dispatch(addMovies({ movie: this.newMovie }));
    // this.dataService.addMovies(this.newMovie).subscribe((res) => {
    //   this.getAllMovies();
    //   this.newMovie = new Movie();
    // });
  }
}
