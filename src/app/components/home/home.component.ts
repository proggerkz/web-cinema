import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  movies: Movie[];
  selected: Movie = null;
  regular = {filter: 'brightness(85%)'};
  dark = {filter: 'brightness(30%)'};
  bright = {filter: 'brightness(100%)'};

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }

  setEffect(movie: Movie): void {
    this.selected = movie;
  }

  clearEffect(): void {
    this.selected = null;
  }

}
