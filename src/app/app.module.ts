import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "../modules/AppRoutingModule";
import { HelloRoute } from "../components/HelloRoute";
import { TitleComponent } from "../components/title/title.component";
import { MoviesComponent } from "../components/movies/movies.component";
import { MovieDetailComponent } from "../components/moviesDetails/movie-detail.component";
import { SearchComponent } from "../components/search/search.component";
import { ThumbMovieComponent } from "../components/thumb-movie/thumb-movie.component";

@NgModule({
  declarations: [
    AppComponent,
    HelloRoute,
    TitleComponent,
    MoviesComponent,
    MovieDetailComponent,
    SearchComponent,
    ThumbMovieComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
