import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieModel } from "../../models/movie.model";


@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  movie: MovieModel;
  isFav: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.movie = this.navParams.data.movie;
    this.isFav = this.movie.isFav;
  }

  action(actionName: string) {
    switch (actionName) {
      case 'like':
        this.movie.userLiked = true;
        break;
      case 'dislike':
        this.movie.userLiked = false;
        break;
      case 'fav':
        this.isFav = !this.isFav;
        break;
      default:
        console.error('Acción incorrecta!');
    }
  }

  ionViewWillLeave() {
    this.movie.isFav = this.isFav;
  }

}
