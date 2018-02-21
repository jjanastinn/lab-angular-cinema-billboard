import { Component, OnInit } from '@angular/core';
import { MoviesServiceService} from '../../services/movies-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  moviesList: Array<Object>;

  constructor(private moviesServiceService: MoviesServiceService) { }

  ngOnInit() {
    this.moviesList = this.moviesServiceService.getMovies();
  }

}
