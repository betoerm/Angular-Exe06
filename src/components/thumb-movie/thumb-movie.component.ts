import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { IMovie } from "../../app/movie";

@Component({
  selector: "thumb-movie",
  templateUrl: "./thumb-movie.component.html"
})
export class ThumbMovieComponent implements OnInit {
  @Input("movieItem") movieItem: IMovie;

  ngOnInit() {
    console.log("thumbMovie", this.movieItem);
  }
}
