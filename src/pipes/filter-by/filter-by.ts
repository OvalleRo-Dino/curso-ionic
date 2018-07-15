import { Pipe, PipeTransform } from '@angular/core';
import { MovieModel } from "../../models/movie.model";

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {

  transform(movies: MovieModel[], query: string) {
    if(query) {
      const finalQuery = query.toUpperCase();
      return movies.filter(m => {
        return m.title.toUpperCase().indexOf(finalQuery) > -1 ||
          m.genre.toUpperCase().indexOf(finalQuery) > -1;
      });
    } else return movies;
  }
}
