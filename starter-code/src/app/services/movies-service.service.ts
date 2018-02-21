import { Injectable } from '@angular/core';
import { moviesList } from '../../sample-movies.js';

@Injectable()
export class MoviesServiceService {
  movies: Array<{
    id: number,
    title: string,
    poster: string,
    synopsis: string,
    genres: Array<string>,
    year: number,
    director: string,
    actors: Array<string>,
    hours: Array<string>,
    room: number
  }>
 
  constructor() {
    this.movies = moviesList;
  }

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movies['id'];
  }

}

