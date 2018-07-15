import { Component, EventEmitter, Input, Output } from '@angular/core';
//@ Models
import { MovieModel, MAX_MOVIE_SCORE } from "../../models/movie.model";

@Component({
  selector: 'movie-info',
  templateUrl: 'movie-info.html',
})
export class MovieInfoComponent {
  maxScore = MAX_MOVIE_SCORE;

  isFav = false;

  isFavMsg = 'Quitar de favoritos';
  isNotFavMsg = 'Agregar a favoritos';

  @Input() movie: MovieModel;
  @Output() movieAction: EventEmitter<string> = new EventEmitter<string>();;

  constructor() {}

  ngOnInit() {
    this.isFav = this.movie.isFav;
  }

  likeMovie() {
    this.movieAction.emit('like');
  }

  dislikeMovie() {
    this.movieAction.emit('dislike');
  }

  changeFavs() {
    this.movieAction.emit('fav');
    this.isFav = !this.isFav;
  }

}
