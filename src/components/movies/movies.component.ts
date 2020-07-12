import { Component } from "@angular/core";
import { MoviesService } from "../../services/MoviesService";
import { IMovie } from "../../app/movie";

@Component({
  selector: "movies-component",
  templateUrl: "movies.component.html"
})
export class MoviesComponent {
  moviesList: IMovie[];
  moviesFilter: IMovie[];

  constructor(private movies: MoviesService) {
    this.moviesList = [];
    this.moviesFilter = this.moviesList;
  }

  ngOnInit() {
    this.movies.getPopular().subscribe(data => {
      console.log(data.results[0]);
      data.results.map(data =>
        this.moviesList.push({
          id: data.id,
          name: data.title,
          date: data.release_date,
          cover: "http://image.tmdb.org/t/p/w185/" + data.poster_path
        })
      );
    });
  }

  onSearchMovie(name: string) {
    console.log(name);
    if (name === "") {
      this.moviesList = this.moviesFilter;
    }
    this.moviesList = this.moviesList.filter(
      item => item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }
}
